import React, {useState} from "react"
import countries from "./countries"
import './App.css'

export default function App() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [country, setCountry] = useState("")
    const [acceptedTerms, setAcceptedTerms] = useState(false)

    const handleSubmit = (event) => {
        alert(`
      Адрес электронной почты: ${email}
      Пароль: ${password}
      Страна: ${country}
      Согласия с условиями: ${acceptedTerms}
    `)
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Создать аккаунт</h1>

            <label>
                Email:
                <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required/>
            </label>

            <label>
                Пароль:
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required/>
            </label>

            <label>
                Страна:
                <select
                    name="country"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    required>
                    <option key=""/>
                    {countries.map(country => (
                        <option key={country}>{country}</option>
                    ))}
                </select>
            </label>

            <label>
                <input
                    name="acceptedTerms"
                    type="checkbox"
                    onChange={e => setAcceptedTerms(e.target.value)}
                    required/>
                I Принять правила игры
            </label>

            <button>Отправить</button>
        </form>
    )
}
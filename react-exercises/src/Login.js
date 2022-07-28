import React , { useState } from "react";;

export function Login() {
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false,
    })

    const [login, setLogin] = useState()

    function inputUpdate(event) {
        const { name, type, value, checked } = event.target

        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
        console.log(data)
    }

    function loginButton() {
        setLogin(login)
    }

    function resetLogin() {
        setData({
            username: '',
            password: '',
            remember: false
        })
    }

    

    return (
        <div>
            <input name="username" value={data.username} onChange={inputUpdate} />
            <input name="password" type="password" value={data.password} onChange={inputUpdate} />
            <input name="remember" type="checkbox" checked={data.remember} onChange={inputUpdate} />
            <button style={{ backgroundColor: data.password.length < 8 ? 'red' : 'green' }} id="login" disabled={!data.username || !data.password} onClick={loginButton}>Login</button>
            <button id="reset" onClick={resetLogin}>Reset</button>
        </div>)
}


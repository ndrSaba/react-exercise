import { useState } from "react"

export function useLogin(){
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

    return {
        data: data,
        onInput: inputUpdate,
        onClickLogin: loginButton,
        onClickResetLogin: resetLogin,
    }
}
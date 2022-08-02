import { useLogin } from "./useLogin";

export function Login() {
    const {data, onInput, onClickLogin, onClickResetLogin} = useLogin()

    return (
        <div>
            <input name="username" value={data.username} onChange={onInput} />
            <input name="password" type="password" value={data.password} onChange={onInput} />
            <input name="remember" type="checkbox" checked={data.remember} onChange={onInput} />
            <button style={{ backgroundColor: data.password.length < 8 ? 'red' : 'green' }} id="login" disabled={!data.username || !data.password} onClick={onClickLogin}>Login</button>
            <button id="reset" onClick={onClickResetLogin}>Reset</button>
        </div>)
}


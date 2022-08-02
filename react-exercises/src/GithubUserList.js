import { useState } from "react"
import { GithubUser } from "./GithubUser"

export function GithubUserList() {
    const [list, setList] = useState([])
    const [userInput, setUserInput] = useState("")


    const newUser = (event) => {
        setUserInput(event.target.value)
    }

    const userSubmit = () => {
        setList([...list, userInput])
    }

    return (
        <div>
            {list.map((username) => (
                <GithubUser username={username} />
            ))}
            <input onChange={newUser} name="username" />
            <button onClick={userSubmit}>Aggiungi</button>
        </div>
    )
}
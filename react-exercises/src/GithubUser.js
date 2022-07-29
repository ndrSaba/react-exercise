import { useEffect, useState } from "react"

export function GithubUser({ username }) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchGithubUser(username) {
        setError(null)
        setLoading(true)

        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()

            setData(json)
        } catch (error) {
            setError(error)
            setData(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchGithubUser(username)
    }, [username])

    return (
        <div>
            <h1>GITHUB USER INFO</h1>
            {loading && <h1>Loading...</h1>}
            {error && <h1>è stato riscontrato un errore</h1>}
            {data && <h3><ul><li>Username: {data.name}</li>
                <li>ID: {data.id}</li>
                <li>Location: {data.location}</li>
            </ul></h3>}
        </div>
    )
}
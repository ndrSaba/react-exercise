import { useGithubUser } from "./useGithubUser"

export function GithubUser({ username }) {
    const {data, error, loading} = useGithubUser(username)
    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>è stato riscontrato un errore</h1>}
            {data && <ul><li>Username: {data.name}</li>
                <li>ID: {data.id}</li>
                <li>Location: {data.location && <span>{data.location}</span>}
                {!data.location && <span>Unknown</span>}</li>
            </ul>}
        </div>
    )
}
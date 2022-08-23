import useSWR from "swr";

const fetcher = url => fetch(url).then(response => response.json());

export function useGithubUser(username){
    const {data, error, mutate} = useSWR(username ? `https://api.github.com/users/${username}`: null, fetcher);
    
    const reFetch = () =>{ mutate() };

    return{
        data,
        error,
        loading: !data && !error,
        reFetch
    }
}

// import { useEffect, useState } from "react"

// export function useGithubUser(username) {
//     const [data, setData] = useState(null)
//     const [error, setError] = useState(null)
//     const [loading, setLoading] = useState(false)

//     async function fetchGithubUser(username) {
//         setError(null)
//         setLoading(true)

//         try {
//             const response = await fetch(`https://api.github.com/users/${username}`)
//             const json = await response.json()

//             setData(json)
//         } catch (error) {
//             setError(error)
//             setData(null)
//         } finally {
//             setLoading(false)
//         }
//     }

//     useEffect(() => {
//         fetchGithubUser(username)
//     }, [username])

//     return {data, error, loading}
// }
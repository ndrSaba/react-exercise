import { useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";

export function ShowGitHubUser() {
    const { username } = useParams();

    return (
        <div>
            <GithubUser username={username} />
            <GithubUserList />
        </div>
    )
}
import { useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";

export function ShowGitHubUser() {
    const { username = "ndrSaba" } = useParams();

    return (
        <div>
            <GithubUser username={username} />
        </div>
    )
}
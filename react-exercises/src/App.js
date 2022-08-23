import { Routes, Route, Link } from "react-router-dom";
import { Container } from "./Container"
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { GithubUserList } from "./GithubUserList";
import { ShowGitHubUser } from "./ShowGithubUser";


export function App() {
    return (
        <Container title={<Hello />}>
            <div>
                <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/users">My GitHub Info</Link> | <Link to="/testPage">Not Found Test Page</Link>
            </div>
            <Routes>
                <Route path="/" element={<Welcome name='John' age={28} />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/users" element={<GithubUserList />}>
                    <Route index element={<p>Aggiungi Username</p>} />
                    <Route path=":username" element={<ShowGitHubUser />} />
                </Route>
                <Route path="*" element={<div><p>Not Found</p>
                    <Link to="/">Go Home</Link></div>} />
            </Routes>
        </Container>
    )
}
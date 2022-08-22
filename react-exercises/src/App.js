import { Routes, Route, Link } from "react-router-dom";
import { Container } from "./Container"
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { ShowGitHubUser } from "./ShowGithubUser";


export function App() {
    return (
        <Container title={<Hello />}>
            <div>
                <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="users/:username">ShowGitHubUser</Link>
            </div>
            <Routes>
                <Route path="/" element={<Welcome name='John' age={28} />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="users/:username" element={<ShowGitHubUser />} />
            </Routes>
        </Container>
    )
}
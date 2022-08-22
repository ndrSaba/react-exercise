import { Routes, Route } from "react-router-dom";
import { Container } from "./Container"
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Hello } from "./Hello";


export function App() {
    return (
        <Container title={<Hello />}>
            <Routes>
                <Route path="/" element={<Welcome name='John' age={28} />} />
                <Route path="counter" element={<Counter />} />
            </Routes>
        </Container>
    )
}
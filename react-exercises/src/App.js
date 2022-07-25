import React from "react";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { Welcome } from "./Welcome";
import { TodoList } from "./TodoList";
import { Container } from "./Container";

export class App extends React.Component {
    render() {
        return (
            <Container title="My Destroyed Application">
                <div>
                    <Hello />
                    <Welcome name='John' age={28} />
                    <Counter />
                </div>
                <div>
                    <ClickCounter />
                    <ClickTracker />
                </div>
                <div>
                    <InteractiveWelcome />
                </div>
                <div>
                    <Login />
                    <UncontrolledLogin />
                </div>
                <div>
                    <TodoList />
                </div>
            </Container>

        )
    }
}
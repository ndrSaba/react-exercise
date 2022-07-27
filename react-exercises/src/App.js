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
import { DisplayLanguage } from "./DisplayLanguage";
import { Sum } from "./Sum";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Container title="My Destroyed Application">
                    <Hello />
                    <Welcome name='John' age={28} />
                    <Counter />
                    <ClickCounter />
                    <ClickTracker />
                    <InteractiveWelcome />
                    <Login />
                    <UncontrolledLogin />
                    <Sum numbers={[1,2,3,4,5]}/>
                    <div>
                        <TodoList render={(stringsArr) => {
                            return (
                                <div>
                                    <ul>
                                        {stringsArr.map((string, index) => (
                                            <li key={string + index}>{string}
                                                <button onClick={() => {
                                                    stringsArr.splice(index, 1);
                                                    this.setState({
                                                        stringsArr: stringsArr
                                                    })
                                                }}>Remove String</button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        }} />

                    </div>
                    <DisplayLanguage />
                </Container >
            </div>
        )
    }
}
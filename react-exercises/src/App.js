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
import { GithubUser } from "./GithubUser";

export class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container title="My Destroyed Application">
                    <Hello />
                    <Welcome name='John' age={28} />
                    <Counter />
                    <ClickCounter />
                    <ClickTracker />
                    <InteractiveWelcome />
                    <Login />
                    <UncontrolledLogin />
                    <Sum />
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
                        <GithubUser username= "ndrSaba" />
                    </div>
                    <DisplayLanguage />

                </Container >
            </React.Fragment>
        )
    }
}
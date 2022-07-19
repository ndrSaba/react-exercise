import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
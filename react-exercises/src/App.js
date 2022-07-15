import React from "react";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name='John' age={28}/>
                <Counter initialValue={0} incrementBy={1} interval={1000}/>
            </div>
        )
    }
}
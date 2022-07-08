import React from "react";
import ReactDOM from "react-dom";
import {Hello} from "./Hello"; 

const root = document.querySelector('#root')

export class App extends React.Component {
    render() {
        return <div><Hello /></div>
    }
}

ReactDOM.render(<App />, root)
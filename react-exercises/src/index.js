import React from "react";
import ReactDOM from "react-dom";

const root = document.querySelector('#root')

export class Hello extends React.Component {
    render() {
        return <h1>Hello, World!</h1>
    }
}

ReactDOM.render(<Hello />, root)
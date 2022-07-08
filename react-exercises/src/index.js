import React from "react";
import ReactDOM from "react-dom";


const root = document.querySelector('#root')

class Hello extends React.Component {
    render() {
        return <h1>Hello, World!</h1>
    }
}

export class App extends React.Component {
    render() {
        return <div><Hello /></div>
    }
}

ReactDOM.render(<App />, root)

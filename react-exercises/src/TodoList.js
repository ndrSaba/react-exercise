import React from "react";

export class TodoList extends React.Component {
    state = {
        stringsArr: ["string1", "string2", "string3"]
    }

    newString = (string) => {
        this.setState({
            input: string.target.value
        })
    }

    addString = () => {
        return this.setState((state) => ({
            stringsArr: [...state.stringsArr, state.input]
        }))
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.stringsArr.map((string, index) => (
                        <li key={string + index}>{string}</li>
                    ))}
                </ul>
                <input type="text" onChange={this.newString}/>
                <button onClick={this.addString}>Add String</button>
            </div>
        )
    }
}
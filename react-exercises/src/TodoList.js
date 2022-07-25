import React from "react";

export class TodoList extends React.Component {
    state = {
        stringsArr: ["string1", "string2", "string3"],
        value: ""
    }

    newString = (string) => {
        this.setState({
            value: string.target.value
        })
    }

    addString = () => {
        this.setState((state) => ({
            stringsArr: [...state.stringsArr, state.value],
            value: ""
        }))
    }

    resetButton = () => {
        this.setState({
            stringsArr: []
        })
    }

    // removeButton = () => {
    //     this.setState((state) => ({
    //         stringsArr: state.stringsArr.splice(1)
    //     }))
    // }

    render() {
        return (
            <div>
                {this.props.render(this.state.stringsArr)}
                <input onChange={this.newString} value={this.state.value} />
                <button onClick={this.addString}>Add String</button>
                <button onClick={this.resetButton}>Reset Array</button>
            </div>
        )
    }
}

/*{ <ul>
                    {this.state.stringsArr.map((string, index) => (
                        <li key={string + index}>{string}
                            <button onClick={this.removeButton}>Remove String</button>
                        </li>
                    ))}
                </ul> }*/
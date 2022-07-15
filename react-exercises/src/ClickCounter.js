import React from "react";

export class ClickCounter extends React.Component {
    state = {
        count: this.props.initialValue ?? 0
    }

    incrementCounterOnClick = () => {
        return this.setState((state) => {
            return {
                count: state.count + 1
            }
        })
    }


    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.incrementCounterOnClick}>Click for Count!</button>
            </div>
        )
    }
}


import React from "react";

export class CounterDisplay extends React.Component {
    render() {
        return <h3>Count: {this.props.count}</h3>
    }
}
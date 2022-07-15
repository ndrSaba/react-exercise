import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue
    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + (this.props.incrementBy)
                }
            })
        }, this.props.interval)
    }



    render() {
        return (
            <div>
                <CounterDisplay count={this.state.count}/>
            </div>
        )
    }
}

Counter.defaultProps = {
    incrementBy: 1,
    interval: 1000,
    initialValue: 0
}


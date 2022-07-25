import React from "react";
import { Day } from "./Day";

export class Hello extends React.Component {
    render() {
        return (
        <div>
            <h1>Hello, World!</h1>
            <Day />
        </div>
        )
    }
}
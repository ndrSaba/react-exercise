import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome, {this.props.name}!</p>
                {this.props.age && <p><Age age = {28}/></p>}
            </div>
        )
    }
}

Welcome.defaultProps = {
    name: "stranger",
}
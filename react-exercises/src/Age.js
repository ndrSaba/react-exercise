import React from "react";

export class Age extends React.Component {
    render() {
        return (
            <div>
                {this.props.age >= 18 && <p>Your age is {this.props.age}</p>}
                {this.props.age <= 18 && <p>Your age is under 18</p>}
            </div>
        )
    }
}
import React from "react";
import { Age } from "./Age"

export function Welcome(props) {
    return (
        <div className="welcome">
            <p>Welcome, {props.name}!</p>
            {props.age >= 18 & props.age <= 65 & props.name === 'John'
                ? <Age age={props.age} />
                : <></>}
                {props.age < 18 && <span>You are very young!</span>}
        </div>
    )
}

// export class Welcome extends React.Component {
//     render() {
//         return (
//             <div className="welcome">
//                 <p>Welcome, {this.props.name}!</p>
//                 {this.props.age >= 18 && this.props.age <= 65 && this.props.name === 'John'
//                     ? <Age age={this.props.age} />
//                     : <></>}
//                 {this.props.age < 18 && <p>You are very young!</p>}
//             </div>
//         )
//     }
// }

Welcome.defaultProps = {
    name: "stranger",
}
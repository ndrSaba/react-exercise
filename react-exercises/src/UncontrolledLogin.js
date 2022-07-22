import React from "react";

export class UncontrolledLogin extends React.Component {
    submitForm = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log(username,
            password,
            remember)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <h3>Uncontrolled Login</h3>
                    <input name="username" defaultValue=""/>
                    <input name="password" type="password" defaultValue=""/>
                    <input name="remember" type="checkbox" defaultChecked={false}/>
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}
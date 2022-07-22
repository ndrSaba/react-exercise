import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
    _formRef = createRef()
    
    submitForm = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log(username,
            password,
            remember)
    }

    componentDidMount() {
		this._formRef.current.elements.username.focus()
	}

    render() {
        return (
            <div>
                <form ref={this._formRef} onSubmit={this.submitForm}>
                    <h3>Uncontrolled Login</h3>
                    <input name="username" defaultValue="Andrea"/>
                    <input name="password" type="password" defaultValue=""/>
                    <input name="remember" type="checkbox" defaultChecked={false}/>
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}
import React from "react";

export class Login extends React.Component{
    state = {
        username: '',
        password: '',
        remember: false
    }

    inputUpdate = (event) => {
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked
        
        this.setState({
            [name]: type === 'checkbox' ? checked : value 
        })
    }

    componentDidUpdate() {
        console.log(this.state)
    }


    render(){
        return (
        <div>
            <input name="username" value={this.state.username} onChange={this.inputUpdate}/>
            <input name="password" type="password" value={this.state.password} onChange={this.inputUpdate}/>
            <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.inputUpdate}/>
        </div>)
    }
}
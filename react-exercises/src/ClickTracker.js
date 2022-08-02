import React from "react";

export class ClickTracker extends React.Component {

    eventHandler = (event) => {
        console.log(
            event.target.name,
            event.button
        )
    }

    render() {
        return (
        <div>
            <button name="button1" onClick={this.eventHandler}>Button 1</button>
            <button name="button2" onClick={this.eventHandler}>Button 2</button>
            <button name="button3" onClick={this.eventHandler}>Button 3</button>
        </div>
        )
    }
}
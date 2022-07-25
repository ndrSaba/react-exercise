import React from "react";
import { LanguageContext } from "./LanguageContext.js";


export class DisplayLanguage extends React.Component {
    state = {
        language: 'en'
    }

    changeLang = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    render() {
        return (
            <LanguageContext.Provider value={this.state.language}>
                <select value={this.state.language} onChange={this.changeLang}>
                    <option value="en">ENGLISH</option>
                    <option value="it">ITALIANO</option>
                </select>
            </LanguageContext.Provider>
        )
    }
}
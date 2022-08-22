import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext.js";


export function DisplayLanguage(){
    const language = useContext(LanguageContext)

        return (
            <h3>Current Language is: {language}</h3>
        )
    }
import React from "react";

export function Sum({numbers}) {
    let totalNumbers = numbers.reduce((total, current) => total + current, 0)
    return (
        <div>
            {numbers && <h1>La somma è : {totalNumbers} </h1> }
        </div>
        )
}
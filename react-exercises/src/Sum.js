import React from "react";

export function Sum({numbers = [5,4,1]}) {
    let totalNumbers = numbers.reduce((total, current) => total + current, 0)
    return (
        <div>
            {numbers && <h1>La somma è : {totalNumbers} </h1> }
        </div>
        )
}
import React, { useState } from "react";

export function ClickCounter({ initialValue = 0 }) {
    const [count, setCount] = useState(initialValue)

    function incrementCounterOnClick() {
        setCount(c => c + 1)
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={incrementCounterOnClick}>Increment</button>
        </div>
    )
}


import React, { useEffect} from "react";
import { useCounter } from "./useCounter";

export function ClickCounter({initialValue = 0}) {
    const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)

    useEffect(() => {
        console.log(`The current value of the counter is ${counter}`)
    })

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}


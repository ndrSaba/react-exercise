import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue)
    useEffect(() => {
        const _timer = setInterval(() => {
            setCounter(counter + 1)
        }, 1000)

        return () => {
            clearInterval(_timer);
        }
    })

    return (

        <div>
            <CounterDisplay count={counter} />
        </div>

    )
}
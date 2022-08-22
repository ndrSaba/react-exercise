import React, { useEffect, useState } from "react";

export function Counter({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue)
    useEffect(() => {
        const _timer = setInterval(() => {
            setCounter(counter + 1)
        }, 1000)

        return () => {
            clearInterval(_timer);
        }
    }, [counter])

    return (
            <h2>Counter: {counter} </h2>
    )
}


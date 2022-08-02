import { useState } from "react"

export function useCounter({initialValue = 0}){
    const [counter, setCount] = useState(initialValue)

    function incrementCounterOnClick() {
        setCount((c) => c + 1)
    }

    function decrementCounterOnClick() {
        setCount((c) => c - 1)
    }

    function resetCounter() {
        setCount(initialValue)
    }

    return {
        counter: counter,
        onIncrement: incrementCounterOnClick,
        onDecrement: decrementCounterOnClick,
        onReset: resetCounter
    }
}
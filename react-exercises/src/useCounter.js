import { useCallback, useState } from "react"

export function useCounter({initialValue = 0}){
    const [counter, setCount] = useState(initialValue)

    const incrementCounterOnClick = useCallback(function incrementCounterOnClick() {
        setCount((c) => c + 1)
    }, [])

    const decrementCounterOnClick = useCallback(function decrementCounterOnClick() {
        setCount((c) => c - 1)
    }, [])

    const resetCounter = useCallback(function resetCounter() {
        setCount(initialValue)
    }, [initialValue])

    return {
        counter: counter,
        onIncrement: incrementCounterOnClick,
        onDecrement: decrementCounterOnClick,
        onReset: resetCounter
    }
}
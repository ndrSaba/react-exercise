import { useMemo } from "react";

export function FilteredList({ personList }) {

    const filteredList = useMemo(() => personList.filter(item => item.age >= 18), [personList])

    return (
        <ul>
            {filteredList.map((item) => (
            <li key={item.id + item.name}>
                Name: {item.name}, age: {item.age}
            </li>
            ))}
        </ul>
    )
}
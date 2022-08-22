import { useEffect, useRef } from "react";

export function CarDetails({initialData = {model:'Panda',year:'2003', color:'green'}}){
    const {model, year, color} = initialData;
    const formRef = useRef(null);

    useEffect(()=>{
        formRef.current.reset();
    },[initialData]);

    return(
        <form ref={formRef}>
            <input name="model" defaultValue={model} />
            <input name="year" defaultValue={year} />
            <input name="color" defaultValue={color} />
        </form>
    )
}

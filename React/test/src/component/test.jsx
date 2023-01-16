import { useRef } from "react";

function Test(props){
    const inputRef = useRef();

    const onChange = (e) =>{
        console.log(e.target.value);
        props.a(e.target.value)
    }
    
    return (
        <>
            <input type="text" ref={inputRef} onChange={onChange}/>
        </>
    )
}

export default Test;
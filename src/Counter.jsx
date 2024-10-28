import { useState } from "react"

export default function Counter() {
    const [count,setCount] = useState(0)
    const handleClickAdd = () =>{
        const newCount  = count+1;
        return setCount(newCount);
    }
    const handleClickReduce = () =>{
       if(count>0)
        { const newCount  = count - 1;
        return setCount(newCount);}
        return count;
    }
    const style = {
        border : "2px solid red",
        borderRadius : "10px",
        padding : "20px" }
    return(
        <>
        <div style={style}>

            <h1>Counter : {count} </h1>
            <button onClick={handleClickAdd}>Add</button>
            <button onClick={handleClickReduce}>Reduce</button>
        </div>
        </>
    )
}
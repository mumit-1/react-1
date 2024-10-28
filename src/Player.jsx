import { useState } from "react"

export default function name() {
    const [playerNum,setTeam] = useState(11);
    const AddPlayer = () =>{
        const newCount = playerNum + 1;
        setTeam (newCount)
    }
    const RemovePlayer = () =>{
        setTeam (playerNum - 1)
    }
    const PlayerStyle = {
        border : "2px solid aqua",
        borderRadius : "20px",
        padding : "20px",
        margin : "10px" 
    }
    return(
        <>
        <div style={PlayerStyle}>
            <h1>players : {playerNum}</h1>
            <button onClick={AddPlayer}>add</button>
            <button onClick={RemovePlayer}>remove</button>
        </div>
        </>
    )
    
}
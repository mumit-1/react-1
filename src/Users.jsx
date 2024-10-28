import { useEffect, useState } from "react"

export default function Users() {
    const [users,SetUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>SetUsers(data))
    },[])
    return(
        <>
        <div>
            <h2>Users : {users.length}</h2>
        </div>
        </>
    )
    
}
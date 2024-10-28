import './Friends.css'
export default function FriendsDetail({info}){
    const {name,email} = info
    // console.log(data);
  
return(
    <>
    <div className='box'>
        <h5>name : {name} </h5>
        <h5>email : {email}</h5>
    </div>
    </>
)
}
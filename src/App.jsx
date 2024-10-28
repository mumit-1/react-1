import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Player from './Player'
import Users from './Users'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    alert('shiiit')
  }
  function AddNumber (num){
    alert(num + 5)
  }

  return (

    <>
      
      <h1>Welcome</h1>
      <Friends></Friends>
      <Users></Users>
      <Player></Player>
      <Counter></Counter>
      <button onClick={handleClick}>CLICK 1</button>
      <button onClick={()=>{alert('ok boom')}}>CLICK 2</button>
      <button onClick={()=>AddNumber(35)}>CLICK 3</button>
      

    </>
  )
}

export default App

import { useState } from 'react'

function App() {
  const [counter,setcounter]=useState(0)
  const addvalue=()=>{
    setcounter(counter + 1)
  }
  const subvalue=()=>{
    setcounter(counter - 1)
  }
  return (
    <>
      <h1>COUNTER VALUE {counter}</h1>
      <button onClick={addvalue}>ADD VALUE</button>
      <button onClick={subvalue}>REMOVE VALUE</button>
    </>
  )
}

export default App

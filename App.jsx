import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState('black')
  const setcolor1=()=>{
    setcolor('red')
  }
  const setcolor2=()=>{
    setcolor('blue')
  }
  const setcolor3=()=>{
    setcolor('green')
  }

  return (
    <div className='w-full h-screen duration-200 fixed flex flex-wrap justify-center items-center m-0 p-0' style={{backgroundColor:color}}> 
      <div className='fixed flex flex-wrap justify-center items-center space-x-5 bg-white rounded-3xl h-32 w-72'>
        <button className='bg-red-600 rounded-md h-9 w-12' onClick={setcolor1}>red</button>
        <button className='bg-blue-600 rounded-md h-9 w-12' onClick={setcolor2}>blue</button>
        <button className='bg-green-600 rounded-md h-9 w-12' onClick={setcolor3}>green</button>
      </div>
    </div>
  )
}

export default App

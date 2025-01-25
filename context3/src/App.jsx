import { useState } from 'react'
import './App.css'
import { MathContextProvider } from './Contexts/MathContext'
import Display from './Components/Display'
import Counter from './Components/Counter'
import Value1 from './Components/Value1'

function App() {
  const [count,setCount]= useState(0)
  const increase=()=>{
    setCount(prev=>prev+1);
  }

  const decrease=()=>{
    setCount(prev=>prev-1);
  }
  const reset=()=>{
    setCount(0)
  }
  return (
    <>
      <MathContextProvider value={{increase, decrease, count, reset}}>
      <h1>Hello world</h1>
      <Display/>
      <Counter/>

      <h2>Another one</h2>
      <Value1/>
      </MathContextProvider>
    </>
  )
}

export default App

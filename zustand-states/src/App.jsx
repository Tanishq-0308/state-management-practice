import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Backend } from './components/backend'
import useStore from './store/multiStore'
import Front from './components/front'

function App() {
  const [count, setCount] = useState(0)
  const value= useStore((state)=> state.states.stateEL);
  console.log('value',value);
  
  return (
    <>
    <Front/>
    <h1>hello</h1>
    <Backend/>
    {value}
    </>
  )
}

export default App

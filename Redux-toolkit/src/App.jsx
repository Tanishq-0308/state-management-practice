import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  const [value,setValue]= useState({id:'', text:''});
  return (
    <>
      <AddTodo value={value}/>
      <Todo getValue={setValue}/>
    </>
  )
}

export default App

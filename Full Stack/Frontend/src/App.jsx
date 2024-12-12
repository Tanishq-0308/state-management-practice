import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  const getJokes=async()=>{
    await axios.get('/api/jokes').then((Response)=>{ 
      console.log(Response.data);
      setJokes(Response.data);
    })
  } 

  return (
    <>
     <h1>Hello world</h1>
     <p>jokes: {jokes.length}</p>
     {
      jokes.map((joke)=>(
        <div key={joke.id}>
          <p>{joke.id}:-{joke.joke}</p>
        </div>
      ))
     }
     <button onClick={getJokes}>Get jokes</button>
    </>
  )
}

export default App

import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';


function Login() {
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username, password})
    }
    const {setUser}= useContext(UserContext)
  return (
    <div className='border flex flex-col border-black mt-2 p-2 bg-gray-600'>
      <input className='border border-black p-2 m-1' type="text" placeholder='username' value={username} onChange={e=>setUsername(e.target.value)}/>
      <input className='border border-black p-2 m-1' type="password" placeholder='password' value={password} onChange={e=>setPassword(e.target.value)}/>
      <button className='bg-green-400 text-white m-3 p-2' type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login

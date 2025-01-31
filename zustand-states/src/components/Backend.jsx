import React, { useState } from 'react'
import useStore from '../store/multiStore';

export const Backend = () => {
    const setState= useStore((state)=> state.setState);
    const [value,setValue]= useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        // const newValue= e.target.value;
        // setValue(e.target.value);
        console.log(value);
        setValue('')
        const component= value[1];
        const dome= value[5];
        console.log(`state${component+dome}`, value);
        setState(`state${component+dome}`, value)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit'>submit</button>
        </form>
    </div>
  )
}

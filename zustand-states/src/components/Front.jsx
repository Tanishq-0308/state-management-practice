import React from 'react'
import useStore from '../store/multiStore'

const Front = () => {
    const value= useStore((state)=>state.states.stateIL)
    console.log('value2', value);
    
  return (
    <div>
      {value}
    </div>
  )
}

export default Front

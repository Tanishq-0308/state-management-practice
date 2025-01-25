import React from 'react'
import useTheme from '../Contexts/MathContext'

const Counter = () => {
    const {increase, decrease, reset}= useTheme();
  return (
    <div>
      <button style={{backgroundColor:'green', margin:'1px'}} onClick={increase}>increase</button>
      
      <button style={{backgroundColor:'gray', margin:'3px'}} onClick={reset}>Reset</button>
      
      <button style={{backgroundColor:'red', margin:'3px'}} onClick={decrease}>decrease</button>

    </div>
  )
}

export default Counter

import React from 'react'
import useTheme from '../Contexts/MathContext'

const Display = () => {
    const {count}= useTheme();
  return (
    <div>
        <h2>
      value: {count}
        </h2>
    </div>
  )
}

export default Display

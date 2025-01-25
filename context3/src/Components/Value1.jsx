import React from 'react'
import useTheme from '../Contexts/MathContext'

const Value1 = () => {
    const {count}= useTheme();
  return (
    <div>
      Value1: {count}
    </div>
  )
}

export default Value1

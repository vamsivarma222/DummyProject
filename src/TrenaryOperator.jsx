
import React from 'react'
import { useState } from 'react'

const TrenaryOperator = () => {
    const [trueFalse,setTrueFalse]= useState(true)
  return (
    <div>TrenaryOperator
    <br/>
    {trueFalse? "statement is true ": "false"}
    <br/>
    <button onClick={() => setTrueFalse(!trueFalse)}>Toggle</button>
    </div>
  )
}

export default TrenaryOperator
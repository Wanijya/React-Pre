import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  const useStateStyle = {
    backgroundColor: "lightgrey",
    width: "20%",
    padding: "50px",
    margin: "10px 50px",
    border: "1px solid black",
    borderRadius: "10px"
  }
  return (
    <div style={useStateStyle}>
      <h1>Hellooo Use State!!</h1>
      <h2>{count}</h2>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default App
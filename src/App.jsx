import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15
  let [counter, setCounter] = useState(15)
  const addvalue = () => {
    console.log("clicked", counter)
    // counter= counter+1
    setCounter(counter+1)
  }

  const removevalue = () => {
    console.log("clicked", counter)
    // counter= counter+1
    setCounter(counter-1)
  }


  return (
    <>
      <h1>my counter </h1>
      <h2>counter value :{counter}</h2>
      <button onClick={addvalue}>
        Add Value {counter}</button>
      <br />
      <button onClick={removevalue}>Remove Value {counter}</button>
    </>

  )
}

export default App

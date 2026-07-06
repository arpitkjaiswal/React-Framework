import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  const addValue = () => {
     console.log("Value of counter is ", counter)
     if (counter < 20) {
    setCounter(counter + 1)
  }
}
  const removeValue = () => {
    console.log("Value of counter is ", counter)
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1> React Devlopment </h1>
    <h2> CounterValue : {counter} </h2>
    
    <button
    onClick={addValue}
    > Add value {counter}</button>
    <br/>

    <button
    onClick={removeValue}
    > remove value {counter} </button>

    <p> footer: {counter} </p>

    </>
  )


}

  

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Cat} from './cat'

function App() {
  const myCat = "Louie";
  const myDog = "Percy";
  const disabilities = ["blind", "deaf", "three-legged"]

  return (
    <div>
      <h1>Hello World!</h1>
      <p>I have a cat named {myCat}.</p>
      <Cat />
      <p>I also have a dog named {myDog}.</p>
      <p>{myDog} is {disabilities[1]}.</p>
    </div>
  )
}

export default App

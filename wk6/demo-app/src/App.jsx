import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Wave} from './Wave'
const myName = "makayla";
const cars = ["toyota", "kia", "Honda"];
const myAge = 24;

function App() {
  

  return (
    <div> 
      <h1>yo yo yo</h1>
      <p> i've missed html... my name is {myName}</p>
      <Wave />
      <p>I have a  {cars[0]}</p>
      <h2>Ternary</h2>
      <p>First - condition</p>
      <p>question mark + true output</p>
      <p>colon + false output</p>
      <p>{myAge > 16 ? "Older" : "Younger"}</p>
      <h2>repo or mcad sudio server</h2>
      <dl>
        <dt>GitHub</dt>
        <dd> Push all the weeks code to github -- the gitignore will ignore the dist folder and that is okay</dd>
        <dt>MCAD SERVER</dt>
        <dd>only upload the <strong>contents</strong> of the dist folder to your MCAD server</dd>
      </dl>
    </div>
  )
}

export default App

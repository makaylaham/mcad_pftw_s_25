import './App.css';
import {useState} from "react";

function App () {
  const [myImage, setMyImage] = useState();
  return (
    <>
    <div>
      <h1>Llama vs. Alpaca</h1>
      <p>Click a button to see the animal!</p>
    </div>
    
    <div className="buttons">
      <button onClick={() => {
        setMyImage("./llama.jpg")
      }}>Llama</button>
    </div>
    <div className="buttons">
      <button onClick={() => {
        setMyImage("./alpaca.jpg")
      }}>Alpaca</button>
    </div>

    <div className="displayimage">
    <img src={myImage}></img>
    </div>
   </>
  )
}

export default App
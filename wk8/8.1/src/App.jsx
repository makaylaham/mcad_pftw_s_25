import './App.css';
import {useState} from "react";

function App () {
  const [llamaImage, setLlamaImage] = useState("./llama.jpg");
  const [alpacaImage, setAlpacaImage] = useState("./alpaca.jpg"); 

  return (
    <>
    <h1>Llama vs. Alpaca</h1>
    <div>
      LLAMA
      <button onClick ={() => {
        setLlamaImage(llamaImage);
      }}>Llama</button>
    </div>
    <div>
      ALPACA
      <button onClick ={() => {
        setAlpacaImage(alpacaImage);
      }}>Alpaca</button>
    </div>
    </>
  )
}

export default App
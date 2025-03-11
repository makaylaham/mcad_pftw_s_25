import './App.css'
import {useState} from "react";

function App () {
  const [animalImage, setAnimalImage] = useState({llamaImg: "./llama.jpg", alpacaImg: "./alpaca.jpg"})

  return (
    <>
    <h1>Llama vs. Alpaca</h1>
    <div>
      LLAMA
      <button onClick ={() => {
        setAnimalImage({...animalImage, llamaImg: animalImage.llamaImg});
      }}>Click Here For Llama</button>
    </div>
    <div>
      ALPACA
      <button onClick ={() => {
        setAnimalImage({...animalImage, alpacaImg: animalImage.alpacaImg});
      }}>Click Here For Alpaca</button>
    </div>
    </>
  )
}

export default App
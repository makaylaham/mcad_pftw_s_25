import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./views/home"
import { DeckDetail } from "./views/DeckDetail" 
import deckData from "./assets/deck-data.json"

function App() {

  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<DeckDetail data={deckData}/>} />
    </Routes>
  )
}

export default App;
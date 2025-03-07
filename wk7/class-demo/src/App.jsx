import "./App.css";
import { BakeryImagery } from "./components/bakery";

function App() {
  const bakeryCards = [
    {
      colors: ["tan", "brown"],
      font: "Bakery Goods",
      image: "./bakery goods font.jpg",
    }
  ]
  return (
   <div className="bakery-font">
    <BakeryImagery></BakeryImagery>
    
   </div>
  )
}

export default App

import Color from "./components/color.jsx";

function App() {
  const colorData = [
    {name: "Yellow Green", hex: "#9ACD32", tone: "warm"},
    {name: "Corn Flower Blue", hex: "#6495ED", tone: "cool"},
    {name: "Crimson", hex: "#DC143C", tone: "warm"},
  ]
  return(
    <div>
      <h2>Colors</h2>
      <Color 
        name={colorData[0].name} 
        tone={colorData[0].tone} 
        hex={colorData[0].hex}>
      </Color>
      <Color 
        name={colorData[1].name} 
        tone={colorData[1].tone} 
        hex={colorData[1].hex}>
      </Color>
      <Color 
        name={colorData[2].name} 
        tone={colorData[2].tone} 
        hex={colorData[2].hex}>
      </Color>
    </div>
  )
}

export default App
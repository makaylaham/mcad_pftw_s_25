import Animal from "./components/animal.jsx";

//counld not get img to populate within the animalData & Animal component

function App() {
  const animalData = [
    {animal: "Llama", fact: "A llama can carry as much as 200 pounds for 12 hours a day, but are not ridden."},
    {animal: "Alpaca", fact: "An alpaca's coat can be shades of black, brown, gray, fawn, beige, white or multi-colored."},
  ]
  return (
    <div>
      <h1>Llama and Alpaca Facts</h1>
      <img src="./llama.jpg"></img>
      <Animal
        animal={animalData[0].animal}
        fact={animalData[0].fact}
      ></Animal>
      <img src="./Alpaca.jpg"></img>
      <Animal
        animal={animalData[1].animal}
        fact={animalData[1].fact}
      ></Animal>
    </div>
  )
}

export default App
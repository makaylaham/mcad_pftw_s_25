import AnimalCard from './AnimalCard.jsx';
import './App.css'
import {useState} from 'react'



function App() {
  const [headline, setHeadline] = useState("Click on 'Focus' to see the animal!");
  const [theAnimals, setTheAnimals] = useState([
    "Tiger",
    "Elephant",
    "Hyacinth Macaw",
    "Dolphin",
    "Fox",
    "Deer",
    "Alligator",
    "Killer Whale",
    "Flamingo",
    "Polar Bear",
    "Pengiun",
    "Horse",
  ]);
  function deleteAnimal(animalName) {
    const updatedArray = theAnimals.filter((animal) => {
      return animal !== animalName
    });
    setTheAnimals(updatedArray);
  }
  function focusAnimal(animalName) {
    setHeadline(animalName)
  }
  return (
    <>
    <h1>Animals of the World</h1>
      <h2>{headline}</h2>
      {theAnimals.map((loopAnimals) => {
        return <AnimalCard 
        key={loopAnimals} 
        animalName={loopAnimals}
        deleteFn={deleteAnimal}
        focusFn={focusAnimal}
        ></AnimalCard>
      })}
    </>
  )
}

export default App

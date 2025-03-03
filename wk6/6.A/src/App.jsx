const llamaFacts = [
  "A llamas life span is about 15 to 20 years.", 
  "Llamas are roughly 24lbs at birth.", 
  "Llamas eat grass.", 
  "Llamas are related to camels.", 
  "When one llama is angry at another llama, they will stick their tongues out to express their dislike.", 
  "A llama can spit green, partially digested food 15 feet or more.", 
  "Females and males reach maturity at about 2 to 3 years of age.",
];
const llama = true;

function App() {
  return (
  <div>
    <h1>Please enjoy these facts about llamas!</h1>
    <p>{llamaFacts[2]}</p>
    <p>{llamaFacts[3]}</p>
    <p>{llamaFacts[1]}</p>
    <p>{llamaFacts[0]}</p>
    <p>{llamaFacts[5]}</p>
    {/* <p>{llamaFacts[6]}</p>
    <p>{llamaFacts[4]}</p> */}
    <p>{llama ? (llamaFacts[6]) : (llamaFacts[1])}</p>
    <p>{llama ? (llamaFacts[4]) : (llamaFacts[1])}</p>

  </div>  
  )
}

export default App

import "./components.css"

function Animal({animal, fact, image}) {
    return (
        <div className= "animalCard">
            <h2>{animal}</h2>
            <p>{fact}</p>
            <div>{image}</div>
        </div>
    )
}

export default Animal
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import "./DeckDetail.css";
    
export function DeckDetail({data}) {
    const {id} = useParams();
    console.log("params", id);
    const selectedDeck = data.find ((deck) => deck.id === id);
    console.log ("selected deck", selectedDeck);
    return (
        <>
        <Link to="/"><p>Return to CD Collection Here!</p></Link>
        <h1> {selectedDeck.albumName} </h1>
        <h2> {selectedDeck.albumArtist} </h2>
        <img src={selectedDeck.image} alt={selectedDeck.albumName} />
        <p>Release Year: {selectedDeck.releaseYear} </p>
        <p>Record Label: {selectedDeck.labelCompany} </p>
        <p>Number of Tracks: {selectedDeck.numberOfTracks} </p>
        </>
        
    ) 
}

DeckDetail.propTypes = {
    data: PropTypes.array
}
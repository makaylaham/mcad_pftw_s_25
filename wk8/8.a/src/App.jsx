import {useState} from 'react';

import "./App.css";

import ItemCard from './ItemCard/ItemCard';
import {nanoid} from "nanoid";


function App() {
  const [deck, setDecks] = useState(
  [
    {
    albumName: "Discovery",
    albumArtist: "Daft Punk",
    releaseYear: "2001",
    numberOfTracks: "14",
    labelCompany: "Virgin Records",
    image: "./daftpunk_discovery.png",
    id: "1"
    },
    {
    albumName: "Plastic Beach",
    albumArtist: "Gorillaz",
    releaseYear: "2010",
    numberOfTracks: "16",
    labelCompany: "Parlophone Records",
    image: "./plastic_beach.jpg",  
    id: "2"
    },
    {
    albumName: "Britney",
    albumArtist: "Britney Spears",
    releaseYear: "2001",
    numberOfTracks: "13",
    labelCompany: "Jive Records",
    image: "./britney.png",
    id: "3"
    },
    {
    albumName: "American Idiot",
    albumArtist: "Green Day",
    releaseYear: "2004",
    numberOfTracks: "13",
    labelCompany: "Reprise Records",
    image: "./americanidiot.png",
    id: "4"
    },
    {
    albumName: "The Sickness",
    albumArtist: "Disturbed",
    releaseYear: "2000",
    numberOfTracks: "12",
    labelCompany: "Giant / Reprise Records",
    image: "./disturbed.jpg",
    id: "5"
    },
    {
    albumName: "Up!",
    albumArtist: "Shania Twain",
    releaseYear: "2002",
    numberOfTracks: "19",
    labelCompany: "Mercury Nashville",
    image: "./up.png",
    id: "6"
    },
    {
    albumName: "Thank You, Happy Birthday",
    albumArtist: "Cage The Elephant",
    releaseYear: "2011",
    numberOfTracks: "13",
    labelCompany: "Jive / Universal / Relentless",
    image: "birthday.jpg",
    id: "7"
    },
    {
    albumName: "Lies for the Liars",
    albumArtist: "The Used",
    releaseYear: "2007",
    numberOfTracks: "11",
    labelCompany: "Reprise / Warner Bros.",
    image: "./theused.jpg",
    id: "8"
    },
    ]);

    function deleteCard(id) {
      console.log("delete me", id);
      const updatedArray = deck.filter((albumDeck) => {
        return albumDeck.id !== id;
      })
      setDecks(updatedArray)
    }

    function duplicateCard(id) {
      console.log("copy me", id);
      const matchingAlbum = deck.find((albumDeck) => {
        return albumDeck.id === id;
      });
      const updatedDeck = {...matchingAlbum, id: nanoid()}
      setDecks([...deck, updatedDeck])
    }
  return (
    <div className="page">
      <div className="collection">
        {deck.map((albumDeck) => {
          return(
            <ItemCard 
            key={albumDeck.id}
            deleteFn={deleteCard}
            duplicateFn={duplicateCard}
            {...albumDeck} 
            />
          )
        })}
      </div>
    </div>
  )
}

export default App;
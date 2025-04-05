import {useState} from "react";
import {nanoid} from "nanoid";
import TitleHeader from "../header/header.jsx";
import ItemCard from "../ItemCard/ItemCard";
import  {NewAlbumForm} from "../cdForm/cdForm.jsx";
import deckData from "../assets/deck-data.json";

export function Home() {
    const [deck, setDecks] = useState(deckData);

    function addDeck(data) {
      console.log("data", data);
      const newId = nanoid(6);
      const newDeck = {...data, id: newId};
      console.log("newDeck", newDeck);
      setDecks([...deck, newDeck])
    }


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
      <div className="header">
        <TitleHeader />
      </div>
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
      {/* <NewAlbumForm addAlbumFn={addDeck} /> */}
    </div>
    );
}
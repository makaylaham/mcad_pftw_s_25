const myGames = [
    {
        gameTitle: "Taboo",
        typeOfGame: "Board Game",
        releaseYear: "1989",
        publisher: "Hasbro",
        numberOfPlayers: "4-10",
        description: "Taboo is a word-guessing party game where the objective is to have your partners guess the word on the top of your card without using any of the clue words on the card." 
    },
    {
        gameTitle: "Portal 2",
        typeOfGame: "Video Game",
        releaseYear: "2011",
        publisher: "Valve",
        numberOfPlayers: "Single-player & Multiplayer",
        description: "Players solve puzzles by placing portals and teleporting between them. Portal 2 adds features including tractor beams, lasers, light bridges, and paint-like gels that alter player movement or allow portals to be placed on any surface.In the new cooperative mode, players solve puzzles together as robots Atlas and P-Body."  
    },
    {
        gameTitle: "Blather 'Round",
        typeOfGame: "Video Game",
        releaseYear: "2020",
        publisher: "Jackbox Games, Inc.",
        numberOfPlayers: "2-6",
        description: "The game's style is very similar to Charades, where players have to pick a place, story, thing, or person to describe using sentences. While one player gives hints to what they have chosen with fixed sentences, the other players must try to guess what the presenter is describing."
    },
    {
        gameTitle: "Just Dance",
        typeOfGame: "Video Game Series",
        releaseYear: "2009",
        publisher: "Ubisoft",
        numberOfPlayers: "1-4",
        description: "Just Dance is a motion-based dance video game for multiple players, with each game including a collection of classic and modern songs each with its own dance choreographies. During each song, players mirror a dance performed by dancers on the screen to score points."
    }
]

console.log (myGames);

const userInput = window.prompt ("I have 4 games in my collection...Would you like to know about one of them? Enter a number between 1 & 4");

    if(userInput < 1)
        {window.alert("Input is not valid. Refresh and try again.");
    }
    if(userInput > 4)
        {window.alert("Input is not valid. Refresh and try again.");
    }

window.alert("You have chosen " + myGames[userInput-1].gameTitle + ". This is a " + myGames[userInput-1].typeOfGame + " that was released in " + myGames[userInput-1].releaseYear + " by " + myGames[userInput-1].publisher + ". This game allows for this amount of players: " + myGames[userInput-1].numberOfPlayers + ". Here is a little something about this game: " + myGames[userInput-1].description);
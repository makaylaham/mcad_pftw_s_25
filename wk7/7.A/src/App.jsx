import "./App.css"
import {AlbumRow} from "./components/AlbumRow.jsx"

function App() {
  const cdAlbums = [
    {
    albumName: "Megalithic Symphony",
    albumArtist: "AWOLNATION",
    releaseYear: "2011",
    numberOfTracks: "14",
    labelCompany: "Red Bull Records",
    image: "./Awolnation-Megalithic-Symphony.jpeg",
    },
    {
    albumName: "Moral Panic",
    albumArtist: "Nothing But Thieves",
    releaseYear: "2020",
    numberOfTracks: "11",
    labelCompany: "RCA Records",
    image: "./Moral_Panic_Nothing_But_Thieves.jpg",  
    },
    {
    albumName: "What Separates Me from You",
    albumArtist: "A Day to Remember",
    releaseYear: "2010",
    numberOfTracks: "10",
    labelCompany: "Victory Records",
    image: "./ADTR_WSMFY.jpg",
    },
    {
    albumName: "Diamond Eyes",
    albumArtist: "Deftones",
    releaseYear: "2010",
    numberOfTracks: "11",
    labelCompany: "Reprise Records",
    image: "./Deftones_-_Diamond_Eyes.jpg",
    },
    {
    albumName: "Black Holes and Revelations",
    albumArtist: "Muse",
    releaseYear: "2006",
    numberOfTracks: "12",
    labelCompany: "Warner Records",
    image: "./BlackHolesCover.jpg",
    },
    ]
  return (
    <>
    <h1>My CD Collection</h1>
    <p>Below are some of the CD's in my collection:</p>
    <table className="albumtable">
      <thead>
        <tr>
          <th class="firstcolumn">Album Name</th>
          <th>Artist</th>
          <th>Release Year</th>
          <th>Number of Tracks</th>
          <th>Label Company</th>
          <th>Album Cover</th>
        </tr>
      </thead>
      <tbody> 
        {cdAlbums.map((album, index) => {
          console.log("album", album)
          return(
            <AlbumRow 
            key={album.image}
            odd={index % 2 === 0}
            albumName={album.albumName}
            albumArtist={album.albumArtist}
            releaseYear={album.releaseYear}
            numberOfTracks={album.numberOfTracks}
            labelCompany={album.labelCompany}
            image={album.image}
            />
          )
        })}
      </tbody>
    </table>
    </>
  )
}

export default App;
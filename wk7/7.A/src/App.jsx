import "./App.css"
import "./AlbumRow.css"

function App() {
  const cdAlbums = [
    {
    albumName: "Megalithic Symphony",
    albumArtist: "AWOLNATION",
    releaseYear: "2011",
    numberOfTracks: "14",
    labelCompany: "Red Bull Records",
    image: "/Awolnation-Megalithic-Symphony.jpeg",
    },
    {
    albumName: "Moral Panic",
    albumArtist: "Nothing But Thieves",
    releaseYear: "2020",
    numberOfTracks: "11",
    labelCompany: "RCA Records",
    image: "/Moral_Panic_Nothing_But_Thieves.jpg",  
    },
    {
    albumName: "What Separates Me from You",
    albumArtist: "A Day to Remember",
    releaseYear: "2010",
    numberOfTracks: "10",
    labelCompany: "Victory Records",
    image: "/ADTR_WSMFY.jpg",
    },
    {
    albumName: "Diamond Eyes",
    albumArtist: "Deftones",
    releaseYear: "2010",
    numberOfTracks: "11",
    labelCompany: "Reprise Records",
    image: "/Deftones_-_Diamond_Eyes.jpg",
    },
    {
    albumName: "Black Holes and Revelations",
    albumArtist: "Muse",
    releaseYear: "2006",
    numberOfTracks: "12",
    labelCompany: "Warner Records",
    image: "/BlackHolesCover.jpg",
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
            <tr className="odd">
              <td class="firstcolumn">{cdAlbums[0].albumName}</td>
              <td>{cdAlbums[0].albumArtist}</td>
              <td>{cdAlbums[0].releaseYear}</td>
              <td>{cdAlbums[0].numberOfTracks}</td>
              <td>{cdAlbums[0].labelCompany}</td>
              <td><img src={cdAlbums[0].image} alt={cdAlbums[0].albumName}></img></td>
            </tr>
            <tr>
              <td class="firstcolumn">{cdAlbums[1].albumName}</td>
              <td>{cdAlbums[1].albumArtist}</td>
              <td>{cdAlbums[1].releaseYear}</td>
              <td>{cdAlbums[1].numberOfTracks}</td>
              <td>{cdAlbums[1].labelCompany}</td>
              <td><img src={cdAlbums[1].image} alt={cdAlbums[1].albumName}></img></td>
            </tr>
            <tr className="odd">
              <td class="firstcolumn">{cdAlbums[2].albumName}</td>
              <td>{cdAlbums[2].albumArtist}</td>
              <td>{cdAlbums[2].releaseYear}</td>
              <td>{cdAlbums[2].numberOfTracks}</td>
              <td>{cdAlbums[2].labelCompany}</td>
              <td><img src={cdAlbums[2].image} alt={cdAlbums[2].albumName}></img></td>
            </tr>
            <tr>
              <td class="firstcolumn">{cdAlbums[3].albumName}</td>
              <td>{cdAlbums[3].albumArtist}</td>
              <td>{cdAlbums[3].releaseYear}</td>
              <td>{cdAlbums[3].numberOfTracks}</td>
              <td>{cdAlbums[3].labelCompany}</td>
              <td><img src={cdAlbums[3].image} alt={cdAlbums[3].albumName}></img></td>
            </tr>
            <tr className="odd">
              <td class="firstcolumn">{cdAlbums[4].albumName}</td>
              <td>{cdAlbums[4].albumArtist}</td>
              <td>{cdAlbums[4].releaseYear}</td>
              <td>{cdAlbums[4].numberOfTracks}</td>
              <td>{cdAlbums[4].labelCompany}</td>
              <td><img src={cdAlbums[4].image} alt={cdAlbums[4].albumName}></img></td>
            </tr>
      </tbody>
    </table>
    </>
  )
}

export default App;
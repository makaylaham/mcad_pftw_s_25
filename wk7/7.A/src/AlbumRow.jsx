import "./AlbumRow.css"

export function albumRow({albumName, albumArtist, releaseYear, numberOfTracks, labelCompany, image}) {
    return (
        <tr className={odd && "odd"}>
          <td class="firstcolumn">{albumName}</td>
          <td>{albumArtist}</td>
          <td>{releaseYear}</td>
          <td>{numberOfTracks}</td>
          <td>{labelCompany}</td>
          <td><img src={image} alt={albumName}></img></td>
        </tr>
        
    )
    
}
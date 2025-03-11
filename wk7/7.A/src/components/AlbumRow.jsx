export function AlbumRow({albumName, albumArtist, releaseYear, numberOfTracks, labelCompany, image, odd}) {
  return(
    <tr className={odd && "odd"}>
      <td>{albumName}</td>
      <td>{albumArtist}</td>
      <td>{releaseYear}</td>
      <td>{numberOfTracks}</td>
      <td>{labelCompany}</td>
      <td><img src={image} alt={albumName}></img></td>
    </tr>
  )
}


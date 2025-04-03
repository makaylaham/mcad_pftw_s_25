import {Link, useParams} from 'react-router-dom'
// import PropType from 'prop-types;'

export function Song ({data}) {
    // console.log("music list", data);
    const {slug} = useParams();
    console.log("slug", slug);
    const selectedSong = data.find((song) => song.slug === slug)
    console.log ("selected song", selectedSong)
    return (
        <>
            <nav>
                <Link to="/">GO BACK HOME</Link>
            </nav>

            <h1>{selectedSong.title}</h1>
            <img src={selectedSong.cover} alt={selectedSong.title} />
            <p>Artist: {selectedSong.artist}</p>
            <p>Rank: {selectedSong.rank}</p>
        </>
    )
}

// Song.proptypes = {
//     data: PropTypes.arrayOf(PropTypes.any)
// }
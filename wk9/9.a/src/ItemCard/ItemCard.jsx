import PropTypes from "prop-types";
import "./ItemCard.css";

export default function ItemCard({
    albumName,
    albumArtist,
    releaseYear,
    numberOfTracks,
    labelCompany,
    image,
    id,
    deleteFn,
    duplicateFn
}) {
    return (
        <div className="albumCard">
            <div className="cardTitle">
                {albumName}
                <br />
                {albumArtist}
                <hr />
                {releaseYear}
                <br />
                {labelCompany}
            </div>
            <div className="cardImg">
                <img src={image} alt={albumName}/>
            </div>
            <div>
                <p>Number of Tracks: {numberOfTracks}</p>
            </div>
            <div className="action">
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    deleteFn(id)
                }}><img src="./trash.png"></img></a>
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    duplicateFn(id)
                }}><img src="./copy.png"></img></a>
            </div>
        </div>
    )
}

ItemCard.propTypes = {
    albumName: PropTypes.string,
    albumArtist: PropTypes.string,
    releaseYear: PropTypes.string,
    numberOfTracks: PropTypes.string,
    labelCompany: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string,
    duplicateFn: PropTypes.func,
    deleteFn: PropTypes.func,
}
import "./components.css"

function Color({name, tone, hex}) {
    return (
        <div className= "colorCard">
            <h1>{name}</h1>
            <p>This color's tone is considered: {tone}</p>
            <div style={{
                width: "75px",
                height: "75px",
                backgroundColor: hex,
            }}></div>
        </div>
    );
}

export default Color;
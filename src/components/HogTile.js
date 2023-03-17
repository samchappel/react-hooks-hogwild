import HogDetails from "./HogDetails";
import { useState } from 'react';

function HogTile({ 
    name, 
    image, 
    greased, 
    specialty, 
    weight, 
    "highest medal achieved": highestMedal }) {
    const [showDetails, setShowDetails] = useState(false)

    function handleClick() {
        setShowDetails((currentState) => !currentState)
    }

    return (
        <article className="pigTile" onClick={handleClick}>
            <h2>{name}</h2>
            <img className="minPigTile" src={image} alt={name}/>
            { showDetails ? <HogDetails greased={greased} specialty={specialty} weight={weight} highestMedal={highestMedal}/> : null}
            {/* { showDetails && <HogDetails (this is the same as the line above, since there is no other option besides show details, just null/>} */}
        </article>
    )
}

export default HogTile
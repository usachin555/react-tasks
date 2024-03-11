import ReactCardFlip from 'react-card-flip';
// import "./cardFlip.css"
import "./cardFlip.css";
import { useState } from 'react';


function Flip(){
    const [isFlipped, setIsFlipped] = useState(false);

    function flipCard(){
        setIsFlipped(!isFlipped)
    }

    return(
        <div>
            <h1>Flipping The Card</h1>
            <p>click on the card to</p>
            <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped}>
                <div className="cards" onClick={flipCard}>
                    <h1>front</h1>
                </div>
                <div className="cards card-back" onClick={flipCard}>
                    <h1>back</h1>
                </div>

            </ReactCardFlip>
        </div>
    )
}
export default Flip;
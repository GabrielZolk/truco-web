/* eslint-disable react/prop-types */
import './cards.style.css';

import { useSelector, useDispatch } from 'react-redux';
import { setPick } from '../redux/pickerSlice';
import { setCardState } from '../redux/cardClickSlice';

// eslint-disable-next-line react/prop-types
export default function Cards({ playerIndex, playerHand }) {
    
    const cardClicked = useSelector(state => state.cardClicked.value);
    const selectedCardIndex = useSelector(state => state.cardPicked.value);
    
    const dispatch = useDispatch();

    function handleClick(index) {
        if (playerIndex === 0) {
            dispatch(setCardState(true))
            dispatch(setPick(index))
        }
    }

    return (
        <div className='cards-container'>
            {playerHand.map((card, index) => {
                const isCardSelected = playerIndex === 0 && cardClicked && selectedCardIndex === index;
                const cardStyle = {
                    position: isCardSelected ? 'absolute' : 'static',
                    top: isCardSelected ? '0' : 'auto',
                };

                return (
                    <div
                        className={`cards ${playerIndex === 0 ? 'flip' : ''} ${isCardSelected ? 'clicked' : ''}`}
                        key={index}
                        onClick={() => handleClick(index)}
                        style={cardStyle}
                    >
                        <div className="cards__front">
                            <img src={`/Game/frontface/${card}.png`} alt={`Card ${index + 1}`} />
                        </div>
                        <div className="cards__back">
                            <img src="/Game/backface.png" alt="Back Face" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

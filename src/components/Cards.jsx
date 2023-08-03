
import { cards } from '../data/data';
import './cards.style.css';

// eslint-disable-next-line react/prop-types
export default function Cards({ playerIndex }) {
    function shuffleCards(cards) {
        const shuffledCards = [...cards];

    
        for (let i = shuffledCards.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[randomIndex]] = [shuffledCards[randomIndex], shuffledCards[i]];
        }

        return shuffledCards;
    }

    function spreadCards(shuffledCards) {
        const numPlayers = 4;
        const cardsPerPlayer = 3;
        const playerHands = [];

        for (let i = 0; i < numPlayers; i++) {
            const inicio = i * cardsPerPlayer;
            const fim = inicio + cardsPerPlayer;
            const playerHand = shuffledCards.slice(inicio, fim);
            playerHands.push(playerHand);
        }

        return playerHands;
    }

    const shuffledCards = shuffleCards(cards);
    const playerHands = spreadCards(shuffledCards);
    const playerHandNow = playerHands[playerIndex];

    return (
        <div className='cards-container'>
            {playerHandNow.map((card, index) => {
                return (
                    <div className='cards' key={index}>
                        <div className="cards__front">
                            <img src={`../public/Game/frontface/${card}.png`} alt={`Card ${index + 1}`} />
                        </div>
                        <div className="cards__back">
                            <img src="../public/Game/backface.png" alt="Back Face" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

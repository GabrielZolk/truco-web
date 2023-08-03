import './card.style.css'
import { useState } from 'react';

export default function Card() {
  const [isFlipped, setFlipped] = useState(true);

  const flipCard = () => {
    setFlipped(!isFlipped);
  };

  return (
    <>
      <div className={`card ${isFlipped ? 'flip' : ''}`} onClick={flipCard}>
        <div className="card__front">
          <img src="../public/Game/frontface/2_of_clubs.png" alt="Front Face" />
        </div>
        <div className="card__back">
          <img src="../public/Game/backface.png" alt="Back Face" />
        </div>
      </div>
    </>
  );
}

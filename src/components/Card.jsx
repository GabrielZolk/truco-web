import './card.style.css'

export default function Card() {
  return (
    <>
        <div className="card">
            <div className="card__front">
                <img src="../public/Game/frontface/2_of_clubs.png"/>
            </div>
            <div className="card__back">
                <img src="../public/Game/backface.png"/>
            </div>
        </div>
    </>
  )
}

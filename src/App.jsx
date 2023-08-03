// import Card from "./components/Card";
import Cards from "./components/Cards";

export default function App() {

  return (
    <div className="game-container">
      <div className="player-top">
        <Cards playerIndex={0} />
      </div>
      <div className="player-right">
        <Cards playerIndex={1} />
      </div>
      <div className="player-left">
        <Cards playerIndex={2} />
      </div>
      <div className="player-bottom">
        <Cards playerIndex={3} />
      </div>
    </div>
  )
}



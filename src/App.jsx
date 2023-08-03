import './index.css';
import Cards from './components/Cards';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setShuffledCards } from './redux/shuffledCardsSlice';
import { shuffleCards } from './utils/shuffleCards';
import { cards } from './data/data'


export default function App() {
  const shuffledCardsState = useSelector(state => state.shuffledCards.value);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const shuffledCards = shuffleCards(cards);
    dispatch(setShuffledCards(shuffledCards))
  }, [])

  return (
    <div className="game-container">
      <div className="player-top">
        <Cards playerIndex={3} playerHand={shuffledCardsState.slice(0, 3)} />
      </div>
      <div className="player-right">
        <Cards playerIndex={1} playerHand={shuffledCardsState.slice(3, 6)} />
      </div>
      <div className="player-left">
        <Cards playerIndex={2} playerHand={shuffledCardsState.slice(6, 9)} />
      </div>
      <div className="player-bottom">
        <Cards playerIndex={0} playerHand={shuffledCardsState.slice(9, 12)} />
      </div>
    </div>
  )
}

export function shuffleCards(cards) {
  const cardsToShuffler = [...cards];

  for (let i = cardsToShuffler.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [cardsToShuffler[i], cardsToShuffler[randomIndex]] = [cardsToShuffler[randomIndex], cardsToShuffler[i]];
  }

  return cardsToShuffler;
}


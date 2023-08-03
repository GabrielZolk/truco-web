import { createSlice } from '@reduxjs/toolkit';

const shuffleCardsSlice = createSlice({
    name: 'cardsShuffler',
    initialState: {
      value: []
    },
    reducers: {
      setShuffledCards: (state, action) => {
        state.value = action.payload;
      },
    },
  });
  
  export const { setShuffledCards } = shuffleCardsSlice.actions;
  export default shuffleCardsSlice.reducer;
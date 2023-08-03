import { createSlice } from '@reduxjs/toolkit';

const cardStateSlice = createSlice({
    name: 'cardState',
    initialState: {
      value: false
    },
    reducers: {
      setCardState: (state, action) => {
        state.value = action.payload;
      },
    },
  });
  
  export const { setCardState } = cardStateSlice.actions;
  export default cardStateSlice.reducer;
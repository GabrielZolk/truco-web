import { createSlice } from '@reduxjs/toolkit';

const pickerSlice = createSlice({
    name: 'cardPicker',
    initialState: {
      value: null
    },
    reducers: {
      setPick: (state, action) => {
        state.value = action.payload;
      },
    },
  });
  
  export const { setPick } = pickerSlice.actions;
  export default pickerSlice.reducer;
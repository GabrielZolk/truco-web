import { configureStore } from "@reduxjs/toolkit";
import pickReducer from "./pickerSlice";
import cardStateReducer from "./cardClickSlice";
import shuffledCardsReducer from "./shuffledCardsSlice";

export const store = configureStore({
    reducer: {
        cardPicked: pickReducer,
        cardClicked: cardStateReducer,
        shuffledCards: shuffledCardsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch;
import { configureStore } from "@reduxjs/toolkit";
import { gameSlice } from "./gameReducer";
import { awardsSlice } from "./awardsReducer";

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
    awards: awardsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

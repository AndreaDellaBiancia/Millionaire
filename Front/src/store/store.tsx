import { configureStore } from "@reduxjs/toolkit";
import { gameSlice } from "./gameReducer";

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

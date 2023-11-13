import { configureStore } from "@reduxjs/toolkit";
import { gameSlice } from "./gameReducer";
import { awardsSlice } from "./awardsReducer";
import { helpSlice } from "./helpReducer";
import { userSlice } from "./userReducer";

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
    help: helpSlice.reducer,
    awards: awardsSlice.reducer,
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

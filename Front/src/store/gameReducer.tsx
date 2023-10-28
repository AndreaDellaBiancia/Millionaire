import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GameState {
  questions: string[];
  level: string;
}
const initialState: GameState = {
  questions: [] ,
  level: "easy",
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setQuestions: (state , action:  PayloadAction<string[]>) => {
      state.questions = action.payload;
    },
    setLevel: (state , action:  PayloadAction<string>) => {
      state.level = action.payload;
    },
  },
})

export const { setQuestions, setLevel } = gameSlice.actions;
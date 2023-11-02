import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";
import { AnswerItemI } from '../interfaces/AnswerItemInterface';

export interface GameState {
  questions: string[];
  level: string;
  choosedAnswer: AnswerItemI;
  isAnswerSelected: boolean;
}
const initialState: GameState = {
  questions: [] ,
  level: "easy",
  choosedAnswer: {},
  isAnswerSelected: false,
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
    setChoosedAnswer: (state , action:  PayloadAction<AnswerItemI>) => {
      state.choosedAnswer = action.payload;
    },
    setIsAnswerSelected: (state , action:  PayloadAction<boolean>) => {
      state.isAnswerSelected = action.payload;
    },
  },
})

export const { setQuestions, setLevel, setChoosedAnswer, setIsAnswerSelected } = gameSlice.actions;
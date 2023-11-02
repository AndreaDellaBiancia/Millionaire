import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";
import { AnswerItemI } from '../interfaces/AnswerItemInterface';

export interface GameState {
  questions: string[];
  questionNb: number;
  level: string;
  choosedAnswer: AnswerItemI;
  isAnswerSelected: boolean;
}
const initialState: GameState = {
  questions: [],
  questionNb: 0,
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
    setQuestionNb: (state , action:  PayloadAction<number>) => {
      state.questionNb = action.payload;
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

export const { setQuestions, setQuestionNb, setLevel, setChoosedAnswer, setIsAnswerSelected } = gameSlice.actions;
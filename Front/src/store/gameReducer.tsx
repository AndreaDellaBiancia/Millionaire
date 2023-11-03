import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AnswerItemI } from "../interfaces/AnswerItemInterface";

export interface GameState {
  questions: string[];
  questionNb: number;
  level: string;
  choosedAnswer: AnswerItemI;
  isAnswerSelected: boolean;
  isGoodAnswer: boolean;
}
const initialState: GameState = {
  questions: [],
  questionNb: 0,
  level: "easy",
  choosedAnswer: {},
  isAnswerSelected: false,
  isGoodAnswer: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<string[]>) => {
      state.questions = action.payload;
    },
    setQuestionNb: (state, action: PayloadAction<number>) => {
      state.questionNb = action.payload;
    },
    setLevel: (state, action: PayloadAction<string>) => {
      state.level = action.payload;
    },
    setChoosedAnswer: (state, action: PayloadAction<AnswerItemI>) => {
      state.choosedAnswer = action.payload;
    },
    setIsAnswerSelected: (state, action: PayloadAction<boolean>) => {
      state.isAnswerSelected = action.payload;
    },
    setIsGoodAnswer: (state, action: PayloadAction<boolean>) => {
      state.isGoodAnswer = action.payload;
    },
  },
});

export const {
  setQuestions,
  setQuestionNb,
  setLevel,
  setChoosedAnswer,
  setIsAnswerSelected,
  setIsGoodAnswer,
} = gameSlice.actions;

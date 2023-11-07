import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AnswerItemI } from "../interfaces/AnswerItemInterface";

export interface GameState {
  isNewGame: boolean;
  questions: string[];
  questionNb: number;
  level: string;
  choosedAnswer: AnswerItemI | undefined;
  isAnswerSelected: boolean;
  isGoodAnswer: boolean;
  isStartTimer: boolean;
}
const initialState: GameState = {
  isNewGame: false,
  questions: [],
  questionNb: 0,
  level: "easy",
  choosedAnswer: {},
  isAnswerSelected: false,
  isGoodAnswer: false,
  isStartTimer: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setIsNewGame: (state, action: PayloadAction<boolean>) => {
      state.isNewGame = action.payload;
    },
    setQuestions: (state, action: PayloadAction<string[]>) => {
      state.questions = action.payload;
    },
    setQuestionNb: (state, action: PayloadAction<number>) => {
      state.questionNb = action.payload;
    },
    setLevel: (state, action: PayloadAction<string>) => {
      state.level = action.payload;
    },
    setChoosedAnswer: (
      state,
      action: PayloadAction<AnswerItemI | undefined>
    ) => {
      state.choosedAnswer = action.payload;
    },
    setIsAnswerSelected: (state, action: PayloadAction<boolean>) => {
      state.isAnswerSelected = action.payload;
    },
    setIsGoodAnswer: (state, action: PayloadAction<boolean>) => {
      state.isGoodAnswer = action.payload;
    },
    setIsStartTimer: (state, action: PayloadAction<boolean>) => {
      state.isStartTimer = action.payload;
    },
  },
});

export const {
  setIsNewGame,
  setQuestions,
  setQuestionNb,
  setLevel,
  setChoosedAnswer,
  setIsAnswerSelected,
  setIsGoodAnswer,
  setIsStartTimer,
} = gameSlice.actions;

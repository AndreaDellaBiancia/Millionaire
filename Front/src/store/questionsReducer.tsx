import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";

export interface QuestionsState {
  questions: string[];
}
const initialState: QuestionsState = {
  questions: [] ,
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setQuestions: (state , action:  PayloadAction<string[]>) => {
      state.questions = action.payload;
    },
  },
})

export const { setQuestions } = questionsSlice.actions;
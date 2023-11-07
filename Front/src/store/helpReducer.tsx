import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AnswerItemI } from "../interfaces/AnswerItemInterface";

export interface HelpState {
  isHalfPossibility: boolean;
  isAskPublic: boolean;
  isCallHome: boolean;
  answerElements: (AnswerItemI | undefined)[];
}
const initialState: HelpState = {
  isHalfPossibility: false,
  isAskPublic: false,
  isCallHome: false,
  answerElements: [],
};

export const helpSlice = createSlice({
  name: "help",
  initialState,
  reducers: {
    setIsHalfPossibility: (state, action: PayloadAction<boolean>) => {
      state.isHalfPossibility = action.payload;
    },
    setIsAskPublic: (state, action: PayloadAction<boolean>) => {
      state.isAskPublic = action.payload;
    },
    setIsCallHome: (state, action: PayloadAction<boolean>) => {
      state.isCallHome = action.payload;
    },
    setAnswerElements: (
      state,
      action: PayloadAction<(AnswerItemI | undefined)[]>
    ) => {
      state.answerElements = action.payload;
    },
  },
});

export const {
  setIsHalfPossibility,
  setIsAskPublic,
  setIsCallHome,
  setAnswerElements,
} = helpSlice.actions;

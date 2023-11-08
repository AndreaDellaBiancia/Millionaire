import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AnswerItemI } from "../interfaces/AnswerItemInterface";

export interface AwardsState {
  awards: number[];
  pointsQuestion: number;
  pointsGame: number;
  isMillion: boolean;
}
const initialState: AwardsState = {
  awards: [
    500, 1000, 1500, 2000, 3000, 5000, 7000, 10000, 15000, 20000, 30000, 70000,
    150000, 300000, 1000000,
  ],
  pointsQuestion: 0,
  pointsGame:0,
  isMillion: false,
};

export const awardsSlice = createSlice({
  name: "awards",
  initialState,
  reducers: {
    setAwards: (state, action: PayloadAction<number[]>) => {
      state.awards = action.payload;
    },
    setPointsQuestion: (state, action: PayloadAction<number>) => {
      state.pointsQuestion = action.payload;
    },
    setPointsGame: (state, action: PayloadAction<number>) => {
      state.pointsGame = action.payload;
    },
    setIsMillion: (state, action: PayloadAction<boolean>) => {
      state.isMillion = action.payload;
    },
  },
});

export const { setAwards, setPointsQuestion, setPointsGame, setIsMillion } = awardsSlice.actions;

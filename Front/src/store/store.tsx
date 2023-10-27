import { configureStore } from '@reduxjs/toolkit'
import { questionsSlice } from './questionsReducer'

export const store = configureStore({
  reducer: {
    questions: questionsSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
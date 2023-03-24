import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BriefState {
  isAnswerVisible: boolean,
  answer: null | string
}

const initialState: BriefState = {
  isAnswerVisible: false,
  answer: null
}

export const briefSlice = createSlice({
  name: 'brief',
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<string>) => {
      state.isAnswerVisible = true
      state.answer = action.payload
    },
    removeAnswer: (state) => {
      state.isAnswerVisible = false
    }
  }
})

export const { setAnswer, removeAnswer } = briefSlice.actions
export default briefSlice.reducer

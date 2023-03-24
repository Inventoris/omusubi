import { createSlice } from '@reduxjs/toolkit'

interface RecipeState {
  step: number
}

const initialState: RecipeState = {
  step: 0
}

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    back: (state) => {
      if (state.step > 0) {
        state.step -= 1
      }
    },
    next: (state) => {
      if (state.step < 3) {
        state.step += 1
      }
    },
    resetStep: (state) => {
      state.step = 0
    }
  }
})

export const { back, next, resetStep } = recipeSlice.actions
export default recipeSlice.reducer

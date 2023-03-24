import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MenuState {
  recipe: null | string
}

const initialState: MenuState = {
  recipe: null
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    startCooking: (state, action: PayloadAction<string>) => {
      state.recipe = action.payload
    },
    resetRecipe: (state) => {
      state.recipe = null
    }
  }
})

export const { startCooking, resetRecipe } = menuSlice.actions
export default menuSlice.reducer

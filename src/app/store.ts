import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import briefReducer from '../features/brief/briefSlice'
import menuReducer from '../features/cooking/menu/menuSlice'
import recipesReducer from '../features/cooking/recipe/recipeSlice'

export const store = configureStore({
  reducer: {
    brief: briefReducer,
    menu: menuReducer,
    recipes: recipesReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

import { forwardRef, useRef } from 'react'
import { recipes } from './recipesContent'
import { back, next } from './recipeSlice'
import { resetRecipe } from '../menu/menuSlice'
import { playShiftAnimation } from '../../../App'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { RootState } from '../../../app/store'
import './Recipe.css'

function scrollContentToTop(element: HTMLDivElement | null) : void {
  element?.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

const Recipe = forwardRef<HTMLDivElement>((_, ref) => {
  const choice = useAppSelector((state: RootState) => state.menu.recipe)
  const step = useAppSelector((state: RootState) => state.recipes.step)
  const dispatch = useAppDispatch()
  const recipe = choice ? recipes[choice][step] : null
  const refToContent = useRef<HTMLDivElement | null>(null)

  return (
    <>
      {recipe ?
        <section className="recipe recipe_selected">
          <div className="recipe__content-container" ref={(node) => {
            refToContent.current = node

            if (typeof ref === 'function') {
              ref(node)
            } else if (ref) {
              ref.current = node
            }
          }}>
            <div className="recipe__name-container">
              <h2 className="recipe__name">{choice}</h2>
              <h3 className="recipe__step">Этап: {recipe.stepName}</h3>
            </div>
            <img src={recipe.figure} className="recipe__image" alt="Иллюстрация шага рецепта" />
            <p className="recipe__content">{recipe.text}</p>
          </div>
          <div className="recipe__buttons-container">
            <button className="recipe__button" onClick={() => {
              dispatch(back())
              playShiftAnimation(refToContent.current, 'recipe__content-container_changing')
              scrollContentToTop(refToContent.current)
            }} disabled={step === 0 ? true : false}>Назад</button>
            <button className="recipe__button" onClick={() => {
              dispatch(next())
              playShiftAnimation(refToContent.current, 'recipe__content-container_changing')
              scrollContentToTop(refToContent.current)
            }} disabled={step === 3 ? true : false}>Дальше</button>
          </div>
          <button className="recipe__close-button close-button" onClick={() => dispatch(resetRecipe())}>
            <svg className="recipe__close-logo" height="48" width="48">
              <path d="m12.65 36.45-1.1-1.1L22.9 24 11.55 12.65l1.1-1.1L24 22.9l11.35-11.35 1.1 1.1L25.1 24l11.35 11.35-1.1 1.1L24 25.1Z"/>
            </svg>
          </button>
        </section>
       :
       <section className="recipe" />
      }
    </>
  )
})

export default Recipe

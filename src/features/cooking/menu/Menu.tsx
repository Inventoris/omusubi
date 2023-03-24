import { useMemo } from 'react'
import { ContentItem, MenuProps } from '../../../types/types'
import { menuContent } from './menuContent'
import { resetStep } from '../recipe/recipeSlice'
import { startCooking } from './menuSlice'
import { playShiftAnimation } from '../../../App'
import { useAppDispatch } from '../../../app/hooks'
import './Menu.css'

function Menu({ children, recipeContainer }: MenuProps) {
  const dispatch = useAppDispatch()
  const menu = useMemo(
    () => {
      return menuContent.map((item: ContentItem): JSX.Element =>
        <li className="menu__list-item" key={item.key}>
          <button className="menu__button" onClick={(event: any) => {
            dispatch(startCooking(item.recipe))
            dispatch(resetStep())
            playShiftAnimation(event.target, 'menu__button_chosen')
            playShiftAnimation(recipeContainer.current, 'recipe__content-container_changing')
          }}>{item.recipe}</button>
          <p className="menu__button-hint">( {item.hint} )</p>
        </li>
      )
    },
    [dispatch, recipeContainer]
  )

  return (
    <div className="menu">
      <h2 className="menu__title">Выберите рецепт онигири ↴</h2>
      <ul className="menu__list">{menu}</ul>
    </div>
  )
}

export default Menu

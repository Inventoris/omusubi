import { useMemo } from 'react'
import { ContentItem } from '../../types/types'
import { briefContent } from './briefContent'
import { setAnswer, removeAnswer } from './briefSlice'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { RootState } from '../../app/store'
import './Brief.css'

function Brief() {
  const state = useAppSelector((state: RootState) => state.brief)
  const dispatch = useAppDispatch()
  const brief = useMemo(
    () => {
      return briefContent.map((item: ContentItem): JSX.Element =>
        <li className="brief__list-item" key={item.key}>
          <button className="brief__question-button" onClick={() => dispatch(setAnswer(item.answer))}>{item.question}</button>
        </li>
      )
    },
    [dispatch]
  )

  return (
    <aside className="brief">
      <ul className="brief__list">
        {brief}
      </ul>
      <div className={state.isAnswerVisible ? "brief__answer brief__answer_visible" : "brief__answer brief__answer_hidden"}>
        <p className="brief__answer-content">{state.answer}</p>
        <button className="brief__close-button close-button" onClick={() => dispatch(removeAnswer())}>
          <svg className="brief__close-logo" height="48" width="48">
            <path d="m12.65 36.45-1.1-1.1L22.9 24 11.55 12.65l1.1-1.1L24 22.9l11.35-11.35 1.1 1.1L25.1 24l11.35 11.35-1.1 1.1L24 25.1Z"/>
          </svg>
        </button>
      </div>
    </aside>
  )
}

export default Brief

import { useRef } from 'react'
import Brief from './features/brief/Brief'
import Menu from './features/cooking/menu/Menu'
import Recipe from './features/cooking/recipe/Recipe'
import Footer from './components/footer/Footer'
import { ErrorBoundary } from 'react-error-boundary'
import './App.css'

export function playShiftAnimation (element: HTMLDivElement | null, className: string):void {
  element?.classList.add(className)
  setTimeout(() => element?.classList.remove(className), 130)
}

function fallbackRender({ error }: any) {
  return (
    <div className="error-message">
      <h2>Упс, в этом месте возникла ошибка:</h2>
      <code>{error.message}</code>
    </div>
  )
}

function App() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <>
      <ErrorBoundary fallbackRender={fallbackRender}>
        <header className="header">
          <div className="header__inner">
            <Brief />
            <img src="/assets/logos/logo.svg" className="header__logo" alt="Абстрактный рисунок двух онигири" />
          </div>
        </header>
      </ErrorBoundary>
      <ErrorBoundary fallbackRender={fallbackRender}>
        <main className="main">
          <Menu recipeContainer={ref} />
          <Recipe ref={ref} />
        </main>
      </ErrorBoundary>
      <ErrorBoundary fallbackRender={fallbackRender}>
        <Footer />
      </ErrorBoundary>
    </>
  )
}

export default App

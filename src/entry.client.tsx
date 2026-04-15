import { startTransition } from 'react'
import ReactDOM from 'react-dom/client'
import { getRouter } from './router'

const router = getRouter()

const rootElement = document.getElementById('root')

if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  startTransition(() => {
    root.render(<router.RootComponent />)
  })
} else {
  const root = ReactDOM.hydrateRoot(
    rootElement!,
    <router.RootComponent />,
  )
}

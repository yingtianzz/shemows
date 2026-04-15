import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const projectRoot = process.cwd()

// Ensure entry files exist
const entryServer = path.join(projectRoot, 'src', 'entry.server.tsx')
const entryClient = path.join(projectRoot, 'src', 'entry.client.tsx')
const indexHtml = path.join(projectRoot, 'index.html')

if (!fs.existsSync(entryServer)) {
  console.log('Creating entry.server.tsx...')
  fs.writeFileSync(
    entryServer,
    `import { getRouter } from './router'
import { createStartHandler } from '@tanstack/react-start/server'
import { renderToReadableStream } from 'react-dom/server'

export default createStartHandler({
  getRouter,
  getRenderHandle: () => renderToReadableStream,
})
`
  )
}

if (!fs.existsSync(entryClient)) {
  console.log('Creating entry.client.tsx...')
  fs.writeFileSync(
    entryClient,
    `import { startTransition } from 'react'
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
`
  )
}

if (!fs.existsSync(indexHtml)) {
  console.log('Creating index.html...')
  fs.writeFileSync(
    indexHtml,
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`
  )
}

// Commit changes
try {
  execSync('git add -A', { cwd: projectRoot, stdio: 'inherit' })
  execSync('git commit -m "Setup TanStack Start entry points and Vercel configuration"', {
    cwd: projectRoot,
    stdio: 'inherit',
  })
  console.log('✅ Changes committed successfully')
} catch (error) {
  console.log('No changes to commit or git error:', error.message)
}

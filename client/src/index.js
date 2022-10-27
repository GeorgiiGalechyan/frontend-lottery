import React from 'react' // ядро реакт (UI/UX)
import ReactDOM from 'react-dom/client' // рендер
import { App } from './app.js'

import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

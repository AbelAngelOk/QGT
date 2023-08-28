import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
const elementRoot = document.getElementById('root')
elementRoot.classList.add('w-full')

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

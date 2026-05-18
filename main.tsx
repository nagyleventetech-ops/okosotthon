import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'  // NEM kell elé az /src/
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

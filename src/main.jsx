import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/theme-provider'
import { TerminalProvider } from './components/context/TerminalContext'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <TerminalProvider>
        <App />
      </TerminalProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

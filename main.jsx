import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css"

import Stopwatch from './Stopwatch07.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Stopwatch />
  </StrictMode>,
)

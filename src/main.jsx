import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AuthContext from './context/AuthContext.jsx'
import TaskContex from './context/TaskContex.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <TaskContex>
        <App />
      </TaskContex>
    </AuthContext>
  </StrictMode>,
)

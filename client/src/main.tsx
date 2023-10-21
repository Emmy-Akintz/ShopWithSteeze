import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GeneralAppProvider } from './contexts/GeneralAppContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GeneralAppProvider>
        <App />
      </GeneralAppProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

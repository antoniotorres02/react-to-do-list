import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainPage from './pages/MainPage/MainPage'
import Watermark from './components/Watermark/Watermark'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainPage />
    <Watermark />
  </React.StrictMode>
)

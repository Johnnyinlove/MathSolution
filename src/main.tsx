import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Slider from './Slider.tsx'
import Contrasena from './Contrasena.tsx'
import Validation from './Validation.tsx'
import Nav from './Nav.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Nav/>
    <Slider/>
    <App />
    <Contrasena/>
    <Validation/>
  </React.StrictMode>,
)

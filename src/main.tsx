import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Slider from './Slider.tsx'
import Contrasena from './Contrasena.tsx'
import Validation from './Validation.tsx'
import Nav from './Nav.tsx'
import Horario from './Horario.tsx'
import NotFound from "./NotFound.tsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Nav/> */}
    {/* <Slider/> */}
    {/* <App /> */}
    {/* <Contrasena/> */}
    {/* <Validation/> */}
    {/* <Horario/> */}

    <BrowserRouter>
    <Routes>
      <Route path='/MathSolution/' element={<App/> }/>
      <Route path='/MathSolution/Horario' element={<Horario/> }/>
      {/* <Route path='/contact' element={<Contact/> }/> */}
      {/* <Route path='/about' element={<About/> }/> */}
      <Route path='*' element={<NotFound/> }/>
    </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Horario from './Horario.tsx'
import NotFound from "./NotFound.tsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cursos from './Cursos.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/MathSolution/' element={<App/> }/>
      <Route path='/MathSolution/Horario' element={<Horario/> }/>
      <Route path='/MathSolution/Cursos' element={<Cursos/> }/>
      {/* <Route path='/about' element={<About/> }/> */}
      <Route path='*' element={<NotFound/> }/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Contrasena from "./Contrasena.tsx";
import Horario from './Horario.tsx'
import NotFound from "./NotFound.tsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cursos from './Cursos.tsx'
import  Autor  from "./Autor.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/MathSolution/' element={<App/> }/>
      <Route path='/MathSolution/Horario' element={<Horario/> }/>
      <Route path='/MathSolution/Cursos' element={<Cursos/> }/>
      <Route path='/MathSolution/Contrasena' element={<Contrasena/> }/>
      <Route path='MathSolution/Autor' element={<Autor/> }/>
      <Route path='/MathSolution/*' element={<NotFound/> }/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

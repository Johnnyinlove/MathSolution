import {} from 'react'
import { useNavigate } from "react-router-dom";
import svg from "./assets/react.svg";

export default function Nav () {

  const navigate=useNavigate()

   const ReturnHome =()=> {
   navigate("/MathSolution/");  
   }

   const goHorario =()=> {
   navigate("/MathSolution/Horario");  
   }
   
   const goCursos =()=> {
   navigate("/MathSolution/Cursos");  
   }

   const goAutor =()=> {
    navigate("/MathSolution/Autor");  
    }



    return(

        <>


<nav className="navbar bg-alert-mio" data-bs-theme="dark">
    <ul className="nav nav-tabs">
  <li className="nav-item  ">
    <a onClick={ReturnHome} className="nav-link active" aria-current="page" href="#">
      <img src={svg} alt="svg" />
      Home</a>
  </li>
  <li className="nav-item dropdown active">
    <a className="nav-link dropdown-toggle color-new" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Servicios</a>
    <ul className="dropdown-menu">
      <li><a onClick={goCursos}  className="dropdown-item" href="#">Cursos</a></li>
      <li><a onClick={goHorario} className="dropdown-item" href="#">Horarios</a></li>
      <li><a onClick={goAutor} className="dropdown-item" href="#">Autor</a></li>
      <li><hr className="dropdown-divider"/></li>
      <li><a className="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li className="nav-item dropdown active">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Webs</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="https://johnnyinlove.d3i5negfn33i3u.amplifyapp.com/">Primera Web</a></li>
      <li><hr className="dropdown-divider"/></li>
      <li><a className="dropdown-item" href="https://johnnyreact.d3if6eo00snogl.amplifyapp.com/"> SSegunda web</a></li>
    </ul>
  </li>
  {/* <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
  </li> */}
</ul>

</nav>
</>

);
}
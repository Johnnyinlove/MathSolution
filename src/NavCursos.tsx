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
    <a className="nav-link dropdown-toggle color-new" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Materias</a>
    <ul className="dropdown-menu">
      <li><a onClick={goCursos}  className="dropdown-item" href="#">Matematicas</a></li>
      <li><a onClick={goHorario} className="dropdown-item" href="#">IIngles</a></li>
      <li><a className="dropdown-item" href="#">Programacion</a></li>
      <li><hr className="dropdown-divider"/></li>
      <li><a className="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
</ul>

</nav>
</>

);
}
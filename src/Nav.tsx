import {} from 'react'



export default function Nav () {


    return(

        <>
    <ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">MathSolutions</a>
  </li>
  <li className="nav-item dropdown active">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Servicios</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Cursos</a></li>
      <li><a className="dropdown-item" href="#">Horarios</a></li>
      <li><a className="dropdown-item" href="#">Contacto</a></li>
      <li><hr className="dropdown-divider"/></li>
      <li><a className="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
</>

);
}
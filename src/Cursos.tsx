import Nav from "./Nav";
import  "./index.css"
// import React from 'react'
import ReactPlayer from 'react-player'
import NavCursos from './NavCursos'

export default function Cursos () {

return (

<>

<NavCursos/>


<h2>Matemática</h2>

<div className="container-fluid">
  <ReactPlayer 
  url='https://www.youtube.com/watch?v=q3PKNySW6LQ&list=PL9SnRnlzoyX0RE6_wcrTKaWj8cmQb3uO6'
    width='100%'
    // height='50%'
    controls
    loop
    volume={.5}
    />
      
</div>

<h2>Programacion</h2>


<div className="container-fluid">
  <ReactPlayer 
  url='https://www.youtube.com/watch?v=_w4sPyiNdBY'
    width='100%'
    // height='100%'
    controls
    loop
    volume={.5}
    />
      
</div>


<h2>Inglés</h2>

<div className="container-fluid">
  <ReactPlayer 
  url='https://www.youtube.com/watch?v=GWS3PCBFVgI'
    width='100%'
    // height='100%'
    controls
    loop
    volume={.5}
    />
      
</div>


</>




);
}
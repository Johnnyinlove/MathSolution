

import { useState, useEffect } from "react";
import './App.css'

import Nav from "./Nav";
import Slider from "./Slider";


export default function Horario( ) {

 

return(
<>

<Nav/>
<Slider/>
    <h1>Horario</h1>
<table className="table table-dark table-hover">
    <thead>
         <tr>
            <th>Compañía</th>
            <th>Contacto</th>
            <th>Mercado</th>
            <th>Destino</th>
            <th>Sucursal</th>
        </tr>

    </thead>
        <tbody>
        <tr>
           <td >Alfreds Futterkiste</td>
           <td className="table-light">Maria Anders</td>
           <td>Germany</td>
           <td>Alemán</td>
           <td>Vedado</td>
                  
        </tr>
        {/* </tr> */}
        <tr>
           <td>Centro comercial Moctezuma</td>
           <td>Francisco Chang</td>
           <td>Mexico</td>
           <td>Español</td>
           <td>Viñales</td>
        </tr>
        <tr>
           <td>Ernst Handel</td>
           <td>Roland Mendel</td>
           <td>Austria</td>
           <td>Sueco</td>
           <td>Varadero</td>
        </tr>
        <tr>
           <td>Island Trading</td>
           <td>Helen Bennett</td>
           <td>UK</td>
           <td>Inglés</td>
           <td>Viñales</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canadá</td>
          <td>Francés</td>
          <td>La Cen</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italia</td>
          <td>Italiano</td>
          <td>Viñales</td>
        </tr>
        <tr>
          <td>Castillo Ratimbum</td>
          <td>Fiona Shrek</td>
          <td>Mexico</td>
          <td>Español</td>
          <td>Merida</td>
       </tr>
       </tbody>
</table>

</>


);
}
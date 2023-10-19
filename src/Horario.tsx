
import './App.css'

import Nav from "./Nav";
import Slider from "./Slider";


export default function Horario( ) {

 

return(
<>

<Nav/>

    <h1>Horario</h1>
<table className="table table-dark table-hover">
    <thead>
         <tr>
            <th>Turnos</th>
            <th>Horarios</th>
            <th>L</th>
            <th>M</th>
            <th>Mi</th>
            <th>J</th>
        </tr>

    </thead>
        <tbody>
        <tr>
           <td >1</td>
           <td >3:00pm--4:00pm</td>
           <td>Marlon</td>
           <td>Marlon y Moises</td>
           <td>Marlon</td>
           <td>Marlon y Moises</td>
                  
        </tr>
        {/* </tr> */}
        <tr>
           <td>2</td>
           <td>4:05pm--5:05pm</td>
           <td>Sailin</td>
           <td>Sailin</td>
           <td>Sailin</td>
           <td>Sailin</td>
        
        </tr>
        <tr>
           <td>3</td>
           <td>5:10pm--6:10pm</td>
           <td>Yosvani</td>
           <td>Yosvani</td>
           <td>Eduard</td>
           <td className="table-light"></td>
        </tr>
        <tr>
           <td>4</td>
           <td>6:15pm--7:15pm</td>
           <td className="table-light"></td>
           <td>Rebeca</td>
           <td className="table-light"></td>
           <td>Rebeca</td>
        </tr>
         </tbody>
</table>

</>


);
}
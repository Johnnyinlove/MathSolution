import './App.css'
import yo from '../public/yo.jpg';
import { useNavigate } from "react-router-dom";


function Autor() {
  // const [count, setCount] = useState(0)

  const navigate=useNavigate()

  const ReturnHome =()=> {
    navigate("/MathSolution/");  
    }


  return (
    <>

    <div className='App'>

    
    <div className="card mb-3"  >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={yo} className="img-fluid rounded-start" alt="yo"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Estudios Academicos</h5>
        <p className="card-text">Licenciatura en Matematica: Univerisdad de Oriente, Santiago de Cuba, Cuba</p>
        <p className="card-text"><small className="text-body-secondary"></small></p>
        
        <h5 className="card-title">Habilidades de Programación</h5>
        <p className="card-text">C++, LaTex, HTML, CCS, JavaScript, TypeScript</p>
        <p className="card-text"><small className="text-body-secondary"></small></p>
        
        <h5 className="card-title">GGustos</h5>
        <p className="card-text">Tocar Guitarra, las Matematicas, la Programacion, los Idiomas, la Teologia </p>
        <p className="card-text"><small className="text-body-secondary"></small></p>
        <a onClick={ReturnHome} href="#" className="btn btn-primary">Go to Home</a>
      </div>
    </div>
  </div>
</div>
    
    </div>
    
    </>
  )
}

export default Autor

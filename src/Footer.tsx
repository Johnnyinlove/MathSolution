import yo from "../public/yo.jpg";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate=useNavigate()

  const goAutor =()=> {
    navigate("/MathSolution/Autor");  
    }

return(
<>

<footer className="bg-primary border border-primary">
  <div className="container border rounded-4">
    <div className="row">
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className='text-center'>
        <figure className="figure">
  <img className='img-fount img-2' src={yo} alt="miimagen"/>
  <figcaption  onClick={goAutor} className="style-text cursorPointer figure-caption text-end">Juan Cruz Oduardo</figcaption>
</figure>
</div>
      </div>
      <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
        <div>
          <h4>Quick Link</h4>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="style-text text-decoration-info">Home</a>
            </li>
            <li>
            <a href='#' className=" style-text text-decoration-none">Autor</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6">
        <div>
          <h4>Service</h4>
          <ul className="list-unstyled">

            <li>
              <a href="https://johnnyinlove.d3i5negfn33i3u.amplifyapp.com/" className=" style-text text-decoration-none">Web Design</a>
            </li>

          </ul>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6">
        <div>
          <h4>Address</h4>
          <ul className="list-unstyled">

            <li>
              <p>Ciego de Avila
                City in Cuba
            </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center">

      <div className="copyright">
        <p>Developed and maintained by            
        <ul className="list-unstyled">

<li>
  <a onClick={goAutor} href="#" className=" style-text text-decoration-none">JohnCruz</a>
</li>

</ul>
        </p>
      </div>
    </div>
  </div>
</footer>

</>
    
);
}
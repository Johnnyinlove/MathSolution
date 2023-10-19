import { useNavigate } from "react-router-dom";

export default function NotFound() {
const navigate=useNavigate()

    const ReturnHome =()=> {
    navigate("/MathSolution/");  
    }

    return (
        <>
    <div  className='fount'>

        <div className=' text-warning abc '>
        <h1>404 NotFound</h1>  
    <button type="submit" onClick={ReturnHome} className="btn btn-primary ">Home</button>
        </div>

        <div>
         <img src="https://cdn.pixabay.com/photo/2017/07/14/09/28/matrix-2503236_1280.jpg" alt="404" />
        </div>

        </div>

    </>
    );

}
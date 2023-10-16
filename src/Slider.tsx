import { useState, useEffect } from "react";
import './App.css'


export default function Slider( ) {
   

  const images = ["https://cdn.pixabay.com/photo/2018/07/15/10/44/dna-3539309_1280.jpg",
   "https://cdn.pixabay.com/photo/2017/01/21/09/47/learn-1996846_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/06/15/11/51/learn-2405206_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/02/14/07/26/singapore-2064905_640.jpg",
    "https://cdn.pixabay.com/photo/2015/10/11/11/20/banner-982162_1280.jpg"
  ];

      const [slideIndex, setSlideIndex] = useState(0);
      const [autoPlay, setAutoPlay] = useState(true);

      const nextSlide =() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % images.length); // Cambia 3 por el número de imágenes en tu slider
      };
      
      const prevSlide = () => {
        setSlideIndex((prevIndex) =>
          prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
      };

      useEffect(() => {
    let interval:any;

        if (autoPlay) {
           interval = setInterval(() => {
            nextSlide();
          }, 2500)
        }; // Cambia 2500 ms (3 segundos) al intervalo deseado
    
        return () => {
          clearInterval(interval);
        };
      }, [autoPlay]);
    
    
      const toggleAutoPlay = () => {
        setAutoPlay(!autoPlay);
      };
    
      const handleMouseEnter = () => {
        setAutoPlay(false);
      };
    
      const handleMouseLeave = () => {
        setAutoPlay(true);
      };

    


return (

    <>
{/* <h1>Hola</h1>

<div className="slider">
      <img src={images[slideIndex]} alt={`Imagen ${slideIndex + 1}`} className="carousel-item-img" />
    </div> */}


<h2>Vamos a ver</h2>
<div    onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} id="carouselExample" className="carousel slide">

{/* <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={images[slideIndex]} alt={`Imagen ${slideIndex + 1}`} className="d-block w-100 carousel-item-img" />
    </div>
     </div>
  <button   onClick={prevSlide} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button         onClick={nextSlide} className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>

);
} 

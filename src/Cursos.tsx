import Nav from "./Nav";
import  "./index.css"
// import React from 'react'
import ReactPlayer from 'react-player'

export default function Cursos () {

return (

<>

<Nav/>


<div className="ratio1">
  <iframe className="ratio" src="https://www.youtube.com/embed/UFaMBm8-7mQ?rel=0" title="YouTube video" allowFullScreen />
</div>


<div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ugp2hjSycmk'
          width='100%'
          height='100%'
          controls
          loop
          volume={1}
        />
      </div>

</>




);
}
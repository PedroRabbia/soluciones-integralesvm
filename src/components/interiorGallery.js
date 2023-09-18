import React from 'react'
import Interior1 from "../ASSETS/interiorG1.jpg"
import Interior2 from "../ASSETS/interiorG2.jpg"
import Interior3 from "../ASSETS/interiorG3.png"
import Interior4 from "../ASSETS/interiorG4.png"
import Interior5 from "../ASSETS/interiorG5.png"
import Interior6 from "../ASSETS/interiorG6.jpg"
import "../styles/Cristaleria.css"

function interiorGallery() {
  return (
    <div>
       <div>
      <div className="grid-wrapper">
        <div>
        <div className='img'>
        <img src={Interior1}/>
        </div>
      </div>
    </div>
    <div className="grid-wrapper">
        <div>
        <div className='img'>
        <img src={Interior2} />
        </div>
      </div>
    </div>
    <div className="grid-wrapper">
        <div>
        <div className='img'>
        <img src={Interior6} />
        </div>
      </div>
    </div>
    <div className="grid-wrapper">
        <div>
        <div className='img'>
        <img src={Interior5} />
        </div>
      </div>
    </div>
    <div className="grid-wrapper">
        <div>
        <div className='img'>
        <img src={Interior3}/>
        </div>
      </div>
    </div>
    <div className="grid-wrapper">
        <div>
        <div className='img'>
        <img src={Interior4}/>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default interiorGallery

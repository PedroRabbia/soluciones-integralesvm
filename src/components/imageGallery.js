import React from 'react'
import "../styles/Gallery.css"
import Galeria1 from "../ASSETS/Cristaleria1.jpeg"
import Galeria2 from "../ASSETS/cristaleria3.jpeg"
import Galeria3 from "../ASSETS/Cristaleria4.jpeg"
import Galeria4 from "../ASSETS/Cristaleria5.jpeg"
import Galeria5 from "../ASSETS/Cristaleria6.jpg"

function imageGallery() {
  return (
    <div>
      <div className="grid-wrapper">
        <div>
        <div className='img'>
        <img src={Galeria1}/>
        </div>
      </div>
    </div>
    <div className="grid-wrapper">
        <div>
        <div className='img'>
        <img src={Galeria2}/>
        </div>
      </div>
    </div>
    <div className="grid-wrapper">
        <div>
        <div className='img'>
        <img src={Galeria3}/>
        </div>
      </div>
    </div>
    <div className="grid-wrapper">
        <div>
        <div className='img'>
        <img src={Galeria4}/>
        </div>
      </div>
    </div>
    <div className="grid-wrapper">
        <div>
        <div className='img'>
        <img src={Galeria5}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default imageGallery

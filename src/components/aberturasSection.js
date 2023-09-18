import React from 'react'
import "../styles/Gallery.css"
import Aberturas1 from "../ASSETS/Aberturas4.png"
import Aberturas2 from "../ASSETS/Aberturas5.jpg"

function aberturasSection() {
  return (
    <div>
      <div className="grid-wrapper">
        <div>
        <div className='img'>
        <img src={Aberturas1}/>
        </div>
      </div>
    </div>
    <div className="grid-wrapper">
        <div>
        <div className='img'>
        <img src={Aberturas2}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default aberturasSection

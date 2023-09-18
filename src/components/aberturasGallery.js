import React from 'react'
import "../styles/Gallery.css"
import Aberturas1 from "../ASSETS/Aberturas1.png"
import Aberturas2 from "../ASSETS/Aberturas2.png"
import Aberturas3 from "../ASSETS/Aberturas3.png"
import Aberturas4 from "../ASSETS/Aberturas6.jpg"

function aberturasGallery() {
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
        <img src={Aberturas2} />
        </div>
      </div>
    </div>
    <div className="grid-wrapper">
        <div>
        <div className='img'>
        <img src={Aberturas3}/>
        </div>
      </div>
    </div>
    <div className="grid-wrapper">
        <div>
        <div className='img'>
        <img src={Aberturas4}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default aberturasGallery

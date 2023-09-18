import React from 'react'
import Construcion1 from "../ASSETS/construccion2.png"
import Construcion2 from "../ASSETS/construccion3.png"
import Construcion3 from "../ASSETS/construccion4.png"
import Construcion4 from "../ASSETS/construccion5.png"
import Construcion5 from "../ASSETS/construccion6.png"
import Construcion6 from "../ASSETS/construccion7.png"

function construccionGallery() {
  return (
    <div>
      <div className="grid-wrapper">
        <div>
        <div className='img'>
        <img src={Construcion1}/>
        </div>
      </div>
    </div>
    <div className="grid-wrapper">
        <div>
        <div className='img'>
        <img src={Construcion2} />
        </div>
      </div>
    </div>
    <div className="grid-wrapper">
        <div>
        <div className='img'>
        <img src={Construcion3} />
        </div>
      </div>
    </div>
    <div className="grid-wrapper">
        <div>
        <div className='img'>
        <img src={Construcion4} />
        </div>
      </div>
    </div>
    <div className="grid-wrapper">
        <div>
        <div className='img'>
        <img src={Construcion5}/>
        </div>
      </div>
    </div>
    <div className="grid-wrapper">
        <div>
        <div className='img'>
        <img src={Construcion6}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default construccionGallery

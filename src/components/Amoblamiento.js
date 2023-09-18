import React from 'react'
import Interior from "../ASSETS/topwall.jpg"
import Interior2 from "../ASSETS/topfloor.jpg"
import Interior3 from "../ASSETS/amoblamiento1.jpg"
import Interior4 from "../ASSETS/Interiora.jpg"
import Interior5 from "../ASSETS/amoblamiento5.jpg"
import Interior6 from "../ASSETS/amoblamiento6.jpg"
import Interior7 from "../ASSETS/amoblamiento7.jpg"
import "../styles/section.css"
function Amoblamiento() {
  return (
    <div>
      <h1 className='h1_b'>TOP WALL y TOP FLOOR</h1>
      <div className="cortinas_container">
     <div>
     <div className='img_c'>
     <img src={Interior}/>
     <div>
     <img src={Interior2} alt="" />
     </div>
     </div>
   </div>
 </div>
 <h1 className='h1_b'>AMOBLAMIENTO A MEDIDA </h1>
      <div className='amoblamiento_container'>
        <div>
        <div className='img_c'>
        <img src={Interior3}/>
        <div>
        <img src={Interior4} alt="" />
        </div>
        <div>
        <img src={Interior5} alt="" />
        </div>
        <div>
        <img src={Interior6} alt="" />
        </div>
        <div>
        <img src={Interior7} alt="" />
        </div>
        </div>
      </div>
    </div>
 </div>
  )
}

export default Amoblamiento

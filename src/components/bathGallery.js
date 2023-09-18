import React from 'react'
import "../styles/Gallery.css"
import Mampara1 from "../ASSETS/Mampara1.jpg"
import Mampara2 from "../ASSETS/Mampara2.jpg"
import Mampara3 from "../ASSETS/Mampara3.jpg"
import Mampara4 from "../ASSETS/Mampara4.png"
function bathGallery() {
  return (
    <div>
     <div className="img_container">
        <img src={Mampara1} alt="" />
     </div>
     <div className="img_container">
        <img src={Mampara2} alt="" />
     </div>
     <div className="img_container">
        <img src={Mampara3} alt="" />
     </div>
     <div className="img_container">
        <img src={Mampara4} alt="" />
     </div>
    </div>
  )
}

export default bathGallery

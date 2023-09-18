import React from 'react'
import Header from '../components/header'
import ConstruccionG from "../components/construccionGallery.js"

function Construccion() {
  return (
    <div>
      <Header/>
      <div className='section_containerco'>
        <div className='container_landing'>
         <div className="h1_container2">
          <h1>CONSTRUCCION</h1> 
          <p>
         CONSTRUCCION DE DECKS DE MADERA , PERGOLAS Y PVC.</p>
         </div>
        </div>
     </div>
      <ConstruccionG/>
     <div></div>
    </div>
  )
}

export default Construccion

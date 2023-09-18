import React from 'react'
import Header from '../components/header'
import "../styles/Cristaleria.css"
import InteriorGallery from '../components/interiorGallery.js'
import "../styles/Gallery.css"
import Cortinas from "../components/Cortinas.js"
import Amoblamiento from '../components/Amoblamiento'

function Interior() {
  return (
    <div>
      <Header/>
      <div className='section_containeri'>
        <div className='container_landing'>
         <div className="h1_container2">
          <h1>INTERIOR</h1> 
          <p>
          ENCARGADOS DEL MEJOR ACABADO DE INTERIORES CON REVESTIMIENTOS DE VIDRIO. TAMBIEN CONTAMOS CON UN CATALOGO DE MUEBLES DE COCINA Y ACCESORIOS, COMO CORTINAS BLACKOUT Y MOTORIZADAS.</p>
         </div>
        </div>
     </div>
     <div>
      <h1 className='sectionc'>REVESTIMIENTOS DE VIDRIO</h1>
     </div>
     <InteriorGallery/>
     <div className="sectionc">
      <h1>CORTINAS</h1>
     </div>
     <Cortinas/>
     <Amoblamiento/>
     <div>
     </div>
    </div>
  )
}

export default Interior

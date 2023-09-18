import React from 'react'
import Header from '../components/header'
import "../styles/Cristaleria.css"
import CardsC from '../components/CardsC'
import ImageGallery from "../components/imageGallery"
import BathGallery from "../components/bathGallery"


function Cristaleria() {
  return (
    <div>
     <Header/>
     <div className='section_containerc'>
        <div className='container_landing'>
         <div className="h1_container2">
          <h1>CRISTALERIA</h1> 
          <p>
Tenemos el sistema techos corredizos en vidrio más versátil del
mercado, realizado totalmente en aluminio y con la más alta
calidad en materias prima y tecnología.
La línea de techos corredizos está compuesta por un exclusivo
sistema de perfiles de diseño italiano, logrando de esta manera
un sistema moderno y versátil, el cual nos pone a la vanguardia

del mercado de los sistemas de techos corredizos.</p>
         </div>
        </div>
     </div>
     <div className="sectionc">
      <h1>FORMA DE TRABAJO</h1>
     </div>
     <CardsC/>
     <div>
      <div>
        <ImageGallery/>
      </div>
      <div className="bathroom">
      <h1>MAMPARAS PARA BAÑO</h1>
      </div>
      <BathGallery/>
     </div>
    </div>
  )
}

export default Cristaleria

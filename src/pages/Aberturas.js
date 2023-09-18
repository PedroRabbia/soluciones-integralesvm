import React from "react"
import Header from "../components/header"
import "../styles/Cristaleria.css"
import AberturasGallery from "../components/aberturasGallery"
import AberturasSection from "../components/aberturasSection"


function Aberturas() {
  return (
    <div>
      <Header/>
      <div className='section_containera'>
        <div className='container_landing'>
         <div className="h1_container2">
          <h1>ABERTURAS</h1> 
          <p>
          NUESTRA EMPRESA NO SÓLO FABRICA ABERTURAS DE ALUMINIO, SINO QUE TAMBIÉN BRINDAMOS SERVICIOS DE VALOR AGREGADO QUE COMPLEMENTAN EL DISEÑO Y LA ARQUITECTURA DE SU PROYECTO.
LOS SERVICIOS QUE PRESTAMOS SON LOS SIGUIENTES:
ASESORAMIENTO, CRISTALERÍA, SERVICIO POST-VENTA. ABERTURAS TOTALMENTE TERMINADAS: HERRAJES, VIDRIOS Y GRAMPAS PARA AMURAR</p>
         </div>
        </div>
     </div>
     <div>
      <AberturasGallery/>
     </div>
     <hr />
     <div className="gates_container">
      <div className="h1_container2">
     <h1>PORTONES</h1>
     <p>Somos representantes de la empresa Abermatic, es una empresa Argentina fundada en 1950 para la fabricación de Sistemas Automáticos de apertura y cierre de cortinas metálicas, de madera y portones. Las aberturas con sistema rebatible se usan en garajes, patios, quinchos o para separar ambientes en las que necesitemos el 100% de apertura.</p>
      </div>
     </div>
     <div>
      <AberturasSection/>
     </div>
    </div>
  )
}

export default Aberturas

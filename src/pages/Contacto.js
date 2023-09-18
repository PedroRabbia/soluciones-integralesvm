import React from 'react'
import Header from '../components/header'
import "../styles/Cristaleria.css"

function Contacto() {
  return (
    <div>
      <Header/>
      <div className='contact_container'>
      <div className="contact_background">
        <h1>CONTACTO</h1>
        <p>SOMOS UNA EMPRESA QUE NOS GUSTA LO QUE HACEMOS»
Asesoramiento Pre Venta» Presupuestación en distintas
opciones» Detalles constructivos» Indicaciones en obras»
Instalación» Servicio Post Venta</p>
      </div>
      </div>
      <div className='contact_section'>
      <h1>NUMERO DE TELEFONO: 0353-563-4678</h1>
      <div className='contact_section'>
      <h2>EMAIL DE CONTACTO: solucionesuatentableintegrale@gmail.com</h2>
      </div>
      <div>
      </div>
      </div>
    </div>
  )
}

export default Contacto

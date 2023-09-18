import React from 'react'
import Card from './Card';
import InteriorImg from "../ASSETS/interior.jpeg"
import Construccion from "../ASSETS/foto2.jpeg"
import Cristaleria from "../ASSETS/CRISTALERIA.jpeg"
import Aberturas from "../ASSETS/Aberturas.jpeg"
import PostVenta from "../ASSETS/post venta.png"
import Contacto from "../ASSETS/contacto.png"
import Vidrio from "../ASSETS/vidriohermetico.jpg"



const cards = [
  {
    id:1,
    title:"Interior",
    imagen: InteriorImg,
    url: "/interior"
    
  },
  {
    id:2,
    title:"Construccion",
    imagen: Construccion,
    url: "/construccion"

  },
  {
    id:3,
    title:"Cristaleria",
    imagen: Cristaleria,
    url: "/cristaleria"
  },
  {
    id:4,
    title:"Aberturas",
    imagen: Aberturas,
    url: "/aberturas"
  },
  {
    id:5,
    title:"Contacto",
    imagen: Contacto,
    url: "/contacto"
  }
  
]

function Cards(){
  return (
    <div className='container'>
      <div className="row d-flex m-2 p-3 g-2 justify-content-center aling-items-center">
        {
          cards.map(card => (
            <div className="col-md-4" key={card.id}>
             <Card title={card.title} imageSource={card.imagen} url={card.url} p={card.p} />
            </div>
            ))
        }
      </div>
    </div>
  )
}

export default Cards;

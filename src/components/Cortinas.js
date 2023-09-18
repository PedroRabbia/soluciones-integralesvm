import "../styles/Cortinas.css"
import Image from '../ASSETS/CortinaB.jpg';
import Image2 from "../ASSETS/CortinaD.jpg"
import Image3 from "../ASSETS/CortinaP.jpg"
function Cortinas() {
  return (
    <div>
    <div>
   <div className="cortinas_container">
     <div>
     <div className='img_c'>
     <img src={Image}/>
     <p className="h1_b">BlackOut</p>
     </div>
   </div>
 </div>
 <div className="cortinas_container">
     <div>
     <div className='img_c'>
     <img src={Image2} />
     </div>
   </div>
 </div>
 <div className="cortinas_container">
     <div>
     <div className='img_c'>
     <img src={Image3} />
     <p className="h1_b">Personalizada</p>
     </div>
   </div>
 </div>
 </div>
 </div>
  )
}

export default Cortinas;
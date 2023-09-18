import React from 'react';
import Carta from './Carta';
import Vidrio from "../ASSETS/vidriohermetico.jpg";
import Profilit from "../ASSETS/profilit.jpg"
import Float from "../ASSETS/float.jpg"

const cards1 = [
    {
        id: 1,
        title: "Doble Vidrio Hermetico (EKOGLASS)",
        imagen: Vidrio,
        p: "Es un componente prefabricado compuesto por un conjunto de dos o más vidrios float planos paralelos, separados entre sí por un espaciador, herméticamente sellados a lo largo de todo su perímetro, que encierra en su interior una cámara estanca de aire deshidratado o gases inertes para mejorar el comportamiento térmico y acústico (Normas IRAM 12598-1)."
    },
    {
        id: 2,
        title: "Profilit",
        imagen: Profilit,
        p: "El sistema de perfiles autoportantes de vidrio Profilit es una innovadora y económica alternativa a las técnicas convencionales de cerramiento con vidrio. Su apariencia visual provee líneas limpias e ininterrumpidas a una fachada, ya que la resistencia mecánica del perfil de vidrio elimina la necesidad de emplear una carpintería convencional para construir cerramientos de grandes dimensiones.."
    },
    {
        id: 3,
        title: "Float",
        imagen: Float,
        p: "Es un cristal plano transparente, libre de distorsión que tiene sus caras planas y paralelas con sus superficies brillantes, pulidas a fuego. De espesor constante y masa homogénea presenta una transparencia perfecta. Es el único vidrio que satisface las exigentes normas internacionales de calidad vigentes en la industria automotriz. El vidrio Float es insustituible cuando se desea obtener una visión clara sin distorsión óptica y constituye la materia prima por excelencia para ser transformado en vidrio templado, laminado, fabricar espejo y manufacturar unidades de doble vidriado hermético."
    }
];

function CardsC() {
    return (
        <div>
            <div className='container'>
                <div className="row d-flex m-2 p-3 g-2 justify-content-center aling-items-center">
                    {
                        cards1.map(carta => (
                            <div className="col-md-4" key={carta.id}>
                                <Carta title={carta.title} imageSource={carta.imagen} p={carta.p} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default CardsC;

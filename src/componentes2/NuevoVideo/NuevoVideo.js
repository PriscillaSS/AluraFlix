import { useState } from "react"
import Formulario from "../Formulario/Formulario"
import "./NuevoVideo.css"




const NuevoVideo = (props) => {
    //const [cartas, actualizarCartas] = useState ([])


        //Lista de Categorías
        const categorias = [
            {
                titulo:"Front End",
                colorPrincipal: "aqua",
            }
            ,
            {
                titulo:"Back End",
                colorPrincipal: "#10ef42",
            }
            ,
            {
                titulo:"Innovación y Gestión",
                colorPrincipal: "#fdf25d",
            }
        ]

    //Registrar Carta
    const registrarCarta = (carta) => {
        console.log("Nueva Carta", carta)
        //Spread operator
        //actualizarCartas ([...cartas, carta])
          // Llamar a la función manejarDatosFormulario del componente App
          props.manejarDatosFormulario(carta); 
        
    }

    return <div className= "NuevoVideo" >
        <Formulario 
        categorias={categorias.map((categoria) => categoria.titulo )}
        registrarCarta={registrarCarta}
        manejarDatosFormulario={props.manejarDatosFormulario} 
        
        />


    </div>

        

}

export default NuevoVideo
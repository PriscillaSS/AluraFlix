import "./Descripcion.css"
import { useState } from "react"


const Descripcion = (props) => {
    
    const [valor, actualizarValor] = useState ("")
    
    const manejarCambio = (event) => {
  
        props.actualizarValor(event.target.value)
    }
    //

    return <div className= "descripcion" >

        <label> {props.titulo} </label>
        <textarea placeholder="¿De qué va a tratar el video?" 
        
        value={props.valor}
        onChange={manejarCambio}
        />

        
        


    </div>


        

}

export default Descripcion
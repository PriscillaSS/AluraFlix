import { useState } from "react"
import "./CampoTexto.css"


const CampoTexto = (props) => {

    
    const manejarCambio = (event) => {
        
        props.actualizarValor(event.target.value)
    }

    return <div className= "campo-texto" >

        <label> {props.titulo} </label>
        <input

        placeholder={props.placeholder}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        
        />


    </div>

}

export default CampoTexto
import { useState, useRef } from "react"
import BotonGuardar from "../BotonGuardar/BotonGuardar"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Descripcion from "../Descripcion/Descripcion"
import Nota from "../Nota/Nota"
import "./Formulario.css"


const Formulario = (props) => {
    //Cambios
    const extraerIdVideo = (url) => {
        const id = url.split('v=')[1];
        return id ? id.split('&')[0] : null;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'video') {
            const videoId = extraerIdVideo(value); 
            actualizarVideo(videoId); 

        } else if (name === 'titulo') {
            actualizarTitulo(value); 
        } else if (name === 'imagen') {
            actualizarImagen(value); 
        } else if (name === 'descripcion') {
            actualizarDescripcion(value); 
        } else if (name === 'categoria') {
            actualizarCategoria(value); 
        }
    };


    const [titulo, actualizarTitulo] = useState("")
    const [video, actualizarVideo] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const [categoria, actualizarCategoria] = useState("")


    return <section className="Formulario">

        <form onSubmit={(event) => {
            event.preventDefault();
            let datosAEnviar = {
                titulo,
                imagen,
                categoria,
                video,
                descripcion
            }
            props.manejarDatosFormulario(datosAEnviar); // Llama a la función para actualizar el estado en App.js
        }} >
            <h1>NUEVO VIDEO</h1>
            <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
            <CampoTexto
                titulo="Título"
                placeholder="Ingrese el título "
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />

            <ListaOpciones
                valor={categoria}
                actualizarCategoria={actualizarCategoria}
                categorias={props.categorias}

            />


            <CampoTexto
                titulo="Imagen"
                placeholder="Ingrese el enlace de la imagen "
                required
                valor={imagen}
                actualizarValor={actualizarImagen}

            />

            <CampoTexto
                titulo="Video"
                placeholder="Ingrese el ID del video "
                required
                valor={video} //Pasa el valor del estado como una cadena de texto
                actualizarValor={actualizarVideo}
            />

            <Nota />

            <Descripcion
                titulo="Descripción"
                valor={descripcion}
                actualizarValor={actualizarDescripcion}

            />
            <BotonGuardar
                onClick={() => {
                    let datosAEnviar = {
                        titulo,
                        imagen,
                        categoria,
                        video,
                        descripcion
                    }
                    props.manejarDatosFormulario(datosAEnviar); // Llama a la función para actualizar el estado en App.js
                }}
            />

        </form>

    </section>

}


export default Formulario

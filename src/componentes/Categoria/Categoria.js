import "./Categoria.css"
import { useEffect, useState } from "react"
import Carta from "../Carta/Carta"

const Categoria = (props) => {
    const [datosFormulario, setDatosFormulario] = useState(props.datosFormulario);

    const color = {
        backgroundColor: props.datos.colorPrincipal
    }

    // Guardar las cartas en el localStorage
    useEffect(() => {
        const claveLocalStorage = `cartas${props.datos.titulo.replace(/ /g, '')}`; //Crea una clave única para cada categoría
        localStorage.setItem(claveLocalStorage, JSON.stringify(datosFormulario));
        console.log("Datos guardados en el localStorage:", datosFormulario); // Imprimir los datos guardados en el localStorage
    }, [datosFormulario]);

    const handleDelete = (idCarta) => {
        // Eliminar la carta del localStorage
        const claveLocalStorage = `cartas${props.datos.titulo.replace(/ /g, '')}`; //Crea una clave única para cada categoría
        localStorage.removeItem(`${claveLocalStorage}${idCarta}`);

        // Actualizar el array datosFormulario
        const nuevosDatosFormulario = datosFormulario.filter((dato) => dato.id !== idCarta);
        setDatosFormulario(nuevosDatosFormulario);
    };

    return <>{ datosFormulario.length > 0 &&
    <section className="categoria">
        <button className="boton-front-end" style={color}> {props.datos.titulo}</button>

        <div className="colaboradores">
            {datosFormulario.map((dato, index) => (
                <Carta key={index} dato={dato} id={index + 1} onDelete={handleDelete} datos={props.datos} /> // Pasa el ID a Carta
            ))}

        </div>
    </section>
    }</>
}

export default Categoria
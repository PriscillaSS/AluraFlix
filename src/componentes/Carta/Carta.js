import "./Carta.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Carta = (props) => {
    const dato = props.dato; // Recibe los datos de Categoria
    const idCarta = props.id; // Recibe el ID de la carta
    const onDelete = props.onDelete; // Recibe la función handleDelete

    // En el componente Carta
    const [datos, setDatos] = useState(props.datos);

    // En el componente Carta
    useEffect(() => {
        setDatos(props.datos);
    }, [props.datos]);

    // Eliminar la carta del localStorage
    const handleDelete = (event) => {
        const carta = event.target.closest(".carta");
        if (carta) {
            const idCarta = carta.id.split("carta")[1]; // Obtener el ID de la carta
            console.log("ID de la carta a eliminar:", idCarta); // Imprimir el ID de la carta a eliminar

            // Eliminar la carta del localStorage
            const claveLocalStorage = `cartas${datos.titulo.replace(/ /g, '')}`; // Crea una clave única para cada categoría
            localStorage.removeItem(`${claveLocalStorage}${idCarta}`);

            carta.remove(); // Eliminar la carta de la vista
            onDelete(idCarta); // Llamar a la función handleDelete del componente padre
        }
    };

    return <div className="carta" id={`carta${idCarta}`}>

        <Link to="/cuartovideo">

            <div className="encabezado">
                <img src={dato.imagen} alt="Equipo Front End"></img>
            </div>
            
        </Link>
        <div className="info">

            <h3>{dato.titulo}</h3>

            <button className="delete" onClick={handleDelete}>
                🗑️Borrar
            </button>

        </div>
    </div>

}

export default Carta
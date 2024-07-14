
import "./ListaOpciones.css"


const ListaOpciones = (props) => {



    const manejarCambio = (event) => {
        props.actualizarCategoria(event.target.value)

    }


    return <div className= "ListaOpciones" >
        <label>Categoría</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar categoría</option>
           {props.categorias.map ((categoria, index) => {
                return <option key={index} value={categoria}> {categoria} </option>
           })}
        </select>

    </div>

}

export default ListaOpciones
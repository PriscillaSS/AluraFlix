
import Categoria from "../Categoria/Categoria"
import MainPrimeraParte from "../MainPrimeraParte/MainPrimeraParte"
import "./Home.css"


const Home = (props) => {
    const datosFormulario = props.datosFormulario;

    
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


    return <div className="Home">
        
        <MainPrimeraParte />

        {

            categorias.map((categoria) => <Categoria 
            datos={categoria} 
            key={categoria.titulo}
            datosFormulario={datosFormulario. filter( carta => carta.categoria === categoria.titulo)}
  
            
            />)

        }

    </div>

        

}

export default Home
import "./BotonHome.css"
import { Link } from "react-router-dom"


const BotonHome = () => {
    return <Link to="/"><button className="BotonHome">Home</button></Link>
}

export default BotonHome
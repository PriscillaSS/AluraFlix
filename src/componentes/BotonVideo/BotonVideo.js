import "./BotonVideo.css"
import { Link } from "react-router-dom"

const BotonVideo = () => {
    return <Link to="/nuevovideo"><button className="BotonVideo">Nuevo video</button></Link>
}

export default BotonVideo
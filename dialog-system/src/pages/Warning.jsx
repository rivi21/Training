import { Link } from 'react-router-dom';
import CloseButton from "../components/CloseButton";
import { FaExclamation } from "react-icons/fa";

export default function Warning() {
    return (
        <div className="parent container p-4 rounded">
            <div className="child">
                <CloseButton className="right" />
            </div>
            <div className="center py-4">
                <div className="back-colored exclamation">
                    <FaExclamation style={{ color: 'orange', fontSize: '50px', zIndex: 1 }} />
                </div>
                <div>
                    <h1>¡Cuidado!</h1>
                    <h6>No podrás volver atrás</h6>
                </div>
                <div >
                    <Link to="/"><button className="btn delete me-3">Borrar</button></Link>
                    <Link to="/"><button className="btn cancel">Cancelar</button></Link>
                </div>
            </div>
            <div className="child left ">
            </div>
        </div>
    )
}

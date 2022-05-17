import CircleButton from "../components/CircleButton";
import { FaExclamation } from "react-icons/fa";

export default function Cuidado() {
    return (
        <div className="parent container p-4 rounded">
            <div className="child">
                <CircleButton className="right" />
            </div>
            <div className="center py-4">
                <div className="fondo exclamation">
                    <FaExclamation  style={{color: 'orange', fontSize: '50px', zIndex:1}} />
                </div>
                <div>
                    <h1>¡Cuidado!</h1>
                    <h6>No podrás volver atrás</h6>
                </div>
                <div >
                    <button className="btn borrar me-3">Borrar</button>
                    <button className="btn cancelar">Cancelar</button>
                </div>
            </div>
            <div className="child left ">
            </div>
        </div>
    )
}

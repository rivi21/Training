import CircleButton from "../components/CircleButton";
import { FaTimes } from "react-icons/fa";

export default function Error() {
    return (
        <div className="parent container p-4 rounded">
            <div className="child">
                <CircleButton className="right" />
            </div>
            <div className="center py-4">
                <div className="fondo times">
                    <FaTimes style={{ color: 'red', fontSize: '50px' }} />
                </div>
                <div className="titles">
                    <h1>Upss</h1>
                    <h6>Algo ha pasado</h6>
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

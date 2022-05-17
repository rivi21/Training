import CircleButton from "../components/CircleButton";
import { FaCheck } from "react-icons/fa";

export default function Vamos() {
  return (
    <div className="parent container p-4 rounded">
      <div className="child">
        <CircleButton className="right" />
      </div>
      <div className="center py-4">
        <div className="fondo check">
          <FaCheck style={{ color: 'green', fontSize: '50px'}} />
        </div>
        <div className="titles">
          <h1>¡Vamos!</h1>
          <h6>Todo ha salido bien :)</h6>
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

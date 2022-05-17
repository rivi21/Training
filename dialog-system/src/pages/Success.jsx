import { Link } from 'react-router-dom';
import CloseButton from "../components/CloseButton";
import { FaCheck } from "react-icons/fa";

export default function Success() {
  return (
    <div className="parent container p-4 rounded">
      <div className="child">
        <CloseButton className="right" />
      </div>
      <div className="center py-5">
        <div className="back-colored check">
          <FaCheck style={{ color: 'green', fontSize: '50px' }} />
        </div>
        <div className="titles">
          <h1>¡Vamos!</h1>
          <h6>Todo ha salido bien :)</h6>
        </div>
        <div >
          <Link to="/"><button className="btn delete p-3">Cerrar Pestaña</button></Link>
        </div>
      </div>
      <div className="child left ">
      </div>
    </div>
  )
}

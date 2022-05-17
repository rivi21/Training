import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-light py-4">
        <NavLink className="nav-link" to="/">Cuidado</NavLink>
        <NavLink className="nav-link" to="/vamos">Vamos</NavLink>
        <NavLink className="nav-link" to="/upps">Upps</NavLink>
    </nav>
  )
}


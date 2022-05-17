import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-light py-4 px-5 justify-content-center">
      <NavLink className="nav-link btn delete text-white mx-3" to="/warning"><span>Warning</span></NavLink>
      <NavLink className="nav-link btn delete text-white mx-3" to="/success"><span>Success</span></NavLink>
      <NavLink className="nav-link btn delete text-white mx-3" to="/error"><span>Error</span></NavLink>
    </nav>
  )
}


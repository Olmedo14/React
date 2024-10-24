import CartWidget from "./CartWidget"
import logo from "../../assets/logo.png"
import "./navbar.css"
import { Link } from "react-router-dom"

const NavBar = () => {

    return(
        <nav className="navbar">
            <Link to="/" className="brand">
                <a href="#"><img src={logo} alt="Icono de la pagina" /></a>
            </Link>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/category/Productos">Productos</Link>
                </li>
                <li>
                    <Link to="/category/Dudas">Dudas</Link>
                </li>
                <li>
                    <Link to="/category/Nosotros">Nosotros</Link>
                </li>
            </ul>
            <CartWidget />
        </nav>

    )
}

export default NavBar
import CartWidget from "./CartWidget"
import logo from "../../assets/logo.png"
import "./navbar.css"

const NavBar = () => {

    return(
        <nav className="navbar">
            <div className="brand">
                <a href="#"><img src={logo} alt="Icono de la pagina" /></a>
            </div>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Preguntas Frecuentes</a></li>
                <li><a href="#">Nosotros</a></li>
            </ul>
            <CartWidget />
        </nav>

    )
}

export default NavBar
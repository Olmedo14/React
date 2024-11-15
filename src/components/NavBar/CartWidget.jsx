import { useContext } from "react"
import { CartContext } from "../../context/CartContext";
import { IoIosCart } from "react-icons/io";
import { Link } from "react-router-dom";
import "./cartwidget.css"

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  const total = totalQuantity()

  return (
    <Link to="/cart" className="cartwidget">
      <IoIosCart className="icon-cart"/>
      <p className="number-cartwidget">{ total >= 1 && total }</p>
    </Link>
  )
}
export default CartWidget
import { IoIosCart } from "react-icons/io";
import "./cartwidget.css"

const CartWidget = () => {
  return (
    <div className="cartwidget">
      <IoIosCart className="icon-cart"/>
      <p>2</p>
    </div>
  )
}

export default CartWidget
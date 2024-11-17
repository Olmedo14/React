import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./cart.css"
import { BsFillTrash3Fill } from "react-icons/bs"

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

  if( cart.length === 0 ){
    return(
      <div className="empty-cart">
        <h2>No hay productos en el carrito 🤔</h2>
        <Link to="/" className="empty-cart-btn">Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div className="cart" >
      <h1 className="title-cart">Productos en el carrito</h1>
      {
        cart.map( (productCart) => (
          <div className="item-cart" key={productCart.id}>
            <img className="img-item-cart" src={productCart.image} width={100} alt="" />
            <p className="text-item-cart1">{productCart.name}</p>
            <p>precio c/u: ${productCart.price}</p>
            <p>cantidad: {productCart.quantity}</p>
            <p>precio parcial: ${ productCart.price * productCart.quantity } </p>
            <button className="delete-item-cart" onClick={ () => deleteProductById(productCart.id) } >
              <BsFillTrash3Fill />
            </button>
          </div>
        ))
      }

      <div className="info-cart">
        <p className="text-info-cart">Precio total: ${totalPrice()}</p>
        <button className="button-delete-cart" onClick={deleteCart} >Vaciar carrito</button>
        <Link to="/checkout" className="info-cart-finish-btn">Terminar mi compra</Link>
      </div>
    </div>
  )
}
export default Cart
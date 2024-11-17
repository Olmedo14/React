import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./itemdetail.css"

const ItemDetail = ({ product }) => {
  const [showItemCount, setShowItemCount] = useState(true)
  const { addProductInCart } = useContext(CartContext)

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count }

    addProductInCart(productCart)
    setShowItemCount(false)
  }

  return (
    <div className="item-detail">
      <div className="images-detail-container">
        <div className="secondary-images">
        </div>
        <div className="card-detalle-main">
          <img src={product.image} width={550} alt="" />
        </div>
      </div>

      <div className="card-detalle">
        <h2 className="card-detalle1">{product.name}</h2>
        <p className="card-detalle2">{product.description}</p>
        <p className="card-detalle3">Precio: ${product.price}</p>
        {
          showItemCount === true ? (
            <ItemCount stock={product.stock} addProduct={addProduct} />
          ) : (
            <Link to="/cart" className="button-end-buy">Terminar mi compra</Link>
          )
        }
      </div>
    </div>
  )
}
export default ItemDetail
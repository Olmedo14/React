import { Link } from "react-router-dom"
import "./item.css"

const Item = ({product}) => {
  return (
    <div className="cards">
        <img src={product.image} alt=""/>
        <h2>{product.name}</h2>
        <p>${product.price}</p>

        <Link className="btn-detalle" to={"/detail/" + product.id} >Ver detalles</Link>
    </div>
  )
}

export default Item
import "./itemdetail.css"
const ItemDetail = ({product}) => {
  return (
    <div className="card-detalle-main">
        <img src={product.image} width={400} alt="" />
        <div className="card-detalle">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
        </div>
    </div>
  )
}

export default ItemDetail
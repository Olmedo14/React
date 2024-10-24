import Item from "./Item"
import "./itemlist.css"

const ItemList = ({products}) => {
  return (
    <div className="productos">
        {
          products.map((product) => (
            <Item product={product} key={product.id}/>
          ))
        }
    </div>
  )
}

export default ItemList
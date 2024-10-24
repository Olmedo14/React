import ItemList from "./ItemList.jsx";
import useProducts from "../../hooks/useProducts"
import Loading from "../Loading/Loading";
import "./ItemListContainer.css"

const itemlistcontainer = ({ greeting }) => {
  const { products, loading } = useProducts()

  return (
    <div className="itc">
        {greeting}
        {
          loading === true ? <Loading  /> : <ItemList products={ products }/>
        }
    </div>
  )
}

export default itemlistcontainer;
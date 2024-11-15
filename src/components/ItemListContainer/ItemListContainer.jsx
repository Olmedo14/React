import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"
import ItemList from "./ItemList.jsx";
import useProducts from "../../hooks/useProducts"
import Loading from "../Loading/Loading";
import "./ItemListContainer.css"


const itemlistcontainer = ({ greeting }) => {
  const { products, loading } = useProducts()
  const { idCategory } = useParams()

  const getProducts = () => {
    const productsRef = collection( db, "products" )
    getDocs(productsRef)
      .then((dataDb)=> {
        //formateamos correctamente nuestros productos
        const productsDb = dataDb.docs.map((productDb)=> {
          return { id: productDb.id , ...productDb.data() }
        })

        setProducts(productsDb)
      })
  }

  const getProductsByCategory = () => {
    const productsRef = collection(db, "products")
    const queryCategories = query( productsRef, where("category", "==", idCategory) )
    getDocs(queryCategories)
      .then((dataDb)=> {
        const productsDb = dataDb.docs.map((productDb)=>{
          return { id: productDb.id, ...productDb.data() }
        })

        setProducts(productsDb)
      })
  }

  useEffect(() => {
    if(idCategory){
      getProductsByCategory()
    }else{
      getProducts()
    }
  }, [idCategory])


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
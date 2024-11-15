import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore"

const products = [
    {
      id: "Rs0001",
      name: "Disney+",
      description: "Plataforma para ver tus series y peliculas favoritas.",
      stock: 10,
      price: 3100,
      image: "/img/disney+.jpg",
      category: "Suscripciones",
    },
    {
      id: "Gt0002",
      name: "Netflix",
      description: "Plataforma para ver tus series y peliculas favoritas.",
      stock: 10,
      price: 3500,
      image: "/img/netflix.jfif",
      category: "Suscripciones",
    },
    {
      id: "Ps0003",
      name: "CrunchyRoll",
      description: "Plataforma para ver tus series y peliculas favoritas.",
      stock: 10,
      price: 3200,
      image: "/img/crunchyroll.jpg",
      category: "Suscripciones",
    },
    {
      id: "Fl0004",
      name: "HboMax",
      description: "Plataforma para ver tus series y peliculas favoritas.",
      stock: 10,
      price: 3500,
      image: "/img/hbomax.jpg",
      category: "Suscripciones",
    },
    {
      id: "Jo0005",
      name: "Prime Video",
      description: "Plataforma para ver tus series y peliculas favoritas.",
      stock: 10,
      price: 3500,
      image: "/img/primevideo.jpg",
      category: "Suscripciones",
    },
    {
      id: "Vz0006",
      name: "Discord Nitro",
      description: "Beneficios extras para Discord, como emojis exclusivos, mejor calidad de video, etc.",
      stock: 10,
      price: 4500,
      image: "/img/discordnitro.jpg",
      category: "Suscripciones",
    },
    {
      id: "Ts0007",
      name: "Game Pass",
      description: "Plataforma que te permite jugar tus juegos favoritos en Xbox y PC.",
      stock: 10,
      price: 5000,
      image: "/img/gamepass.jfif",
      category: "Suscripciones",
    },
  ]

  const seedProducts = () => {
    const productsRef = collection(db, "products")
    products.map(( { id, ...dataProduct } )=> {
      addDoc(productsRef, dataProduct)
    })
  
    console.log("productos subidos")
    return
  }
  
  seedProducts()
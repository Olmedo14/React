import React, { useEffect } from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar/NavBar';
import Modal from './components/Modal/Modal.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  useEffect(() => {
    const timer = setTimeout(() => {
      const modal = new window.bootstrap.Modal(document.getElementById('exampleModal'));
      modal.show();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>

      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer />

          <Routes>
            <Route path="/" element={<ItemListContainer saludo={"Hola Mundo!!"} />} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

        </CartProvider>
      </BrowserRouter>

    </div>
  )
}

export default App;
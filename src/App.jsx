import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Modal from './components/Modal/Modal.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
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
        <NavBar />

        <Routes>
          <Route path='/' element={ <ItemListContainer greeting="¡Hola, bienvenido a nuestra tienda!" /> }/>
          <Route path='/detail/:idProduct' element= { <ItemDetailContainer /> }/>
        </Routes>

        <Modal />
      </BrowserRouter>

    </div>
  )
}

export default App;
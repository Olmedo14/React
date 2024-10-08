import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import banner1 from "./assets/banner-1.jpg";
import modalimg from "./assets/imagen-modal.jpg";
import ItemListContainer from './components/ItemListContainer/itemlistcontainer';

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
      <NavBar />
      <ItemListContainer greeting="¡Hola, bienvenido a nuestra tienda!" />
      <img className='banner1' src={banner1} alt="" />
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content" style={{ backgroundColor: 'black', color: 'white' }}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">¡Suscríbete para recibir Novedades y Ofertas!</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ backgroundColor: 'rgb(0, 114, 187)' }}></button>
            </div>
            <div className="modal-body d-flex">
              <img src={modalimg} alt="Imagen del modal" style={{ width: '50%', borderRadius: '2rem' }} />
              <form style={{ width: '50%', paddingLeft: '20px' }}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" />
                  <div className="form-text" style={{ color: 'white' }}>Nunca compartiremos tu correo electrónico con nadie más.</div>
                </div>
                <button type="submit" className="btn" style={{ backgroundColor: 'rgb(228, 159, 12)', color: 'white' }}>Suscribirse</button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn" data-bs-dismiss="modal" style={{ backgroundColor: 'rgb(0, 114, 187)', color: 'white' }}>Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
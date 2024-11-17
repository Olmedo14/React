import { useState } from 'react';
import "./faq.css";

const Faq = () => {
  const [indiceActivo, setIndiceActivo] = useState(null);

  const alternarPregunta = (indice) => {
    setIndiceActivo(indiceActivo === indice ? null : indice);
  };

  const datosFaq = [
    {
      pregunta: "¿Cuáles métodos de pago aceptan?",
      respuesta: (
        <>
          <p>Para Argentina aceptamos:</p>
          <ul>
            <li>Tarjetas de crédito o débito</li>
            <li>Modo MODO</li>
            <li>Transferencia bancaria (10% de descuento)</li>
          </ul>
          <p>Para el Resto aceptamos:</p>
          <ul>
            <li>Paypal</li>
          </ul>
        </>
      ),
    },
    {
      pregunta: "¿Aceptan Mercado Pago?",
      respuesta: <p>Si, puedes transferir desde Mercado Pago para aplicar el 10% de descuento o puedes pagar con la tarjeta de Mercado Pago.</p>,
    },
    {
      pregunta: "¿Cómo se realizan los envíos?",
      respuesta: <p>Los envíos se realizan vía mail, te enviamos los datos de la cuenta junto con el instructivo paso a paso para realizar la instalación.</p>,
    },
    {
      pregunta: "¿Cuánto tarda en llegar el pedido?",
      respuesta: <p>Una vez confirmado el envio se hace automaticamente al mail que nos proporciona el cliente.</p>,
    },
    {
      pregunta: "¿Ofrecen Garantía?",
      respuesta: <p>Si, ofrecemos garantía permanente en todos nuestros productos.</p>,
    },
    {
      pregunta: "¿Los juegos son seguros y originales?",
      respuesta: <p>Si, todos los juegos que ofrecemos se descargan desde sus plataformas oficiales (Steam generalmente) por lo tanto son 100% seguros y originales!</p>,
    },
    {
      pregunta: "¿Cómo es la Instalación?",
      respuesta: <p>Para la instalación de los juegos unicamente tienes que iniciar sesión en la cuenta que te proporcionaríamos con el juego, una vez estes dentro de la cuenta podrías comenzar a descargar/jugar al juego.</p>,
    },
    {
      pregunta: "¿En qué casos se aplica la garantía?",
      respuesta: <p>La garantía aplica en el caso de que la cuenta que te proporcionamos o el juego no funcione y este error no tenga solución. ¿Tienes más dudas? Puedes ponerte en contacto con nosotros via WhatsApp al +54"número" o dando clic en el ícono de WhatsApp abajo a la derecha.</p>,
    },
  ];

  return (
    <div className="faq-section">
      <h2>Preguntas frecuentes</h2>
      {datosFaq.map((item, indice) => (
        <div className="faq-item" key={indice}>
          <button className="faq-question" onClick={() => alternarPregunta(indice)}>
            {item.pregunta}
          </button>
          <div className="faq-answer" style={{ display: indiceActivo === indice ? 'block' : 'none' }}>
            {item.respuesta}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;

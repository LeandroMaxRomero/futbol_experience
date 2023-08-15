import { useState } from 'react';
import PropTypes from "prop-types";

const images = [
  'img/hero1.png',
  'img/hero2.png',
  'img/hero3.png'
];

const CarruselItem = ({ image }) => (
  <div className="carrusel-item">
    <img src={image} alt="Carrusel Item" />
  </div>
);

export const Carrusel = () => {
  const [ordenActualImagen, setOrdenActualImagen] = useState(0);

  const siguienteImagen = () => {
    setOrdenActualImagen((OrdenPrevio) => (OrdenPrevio + 1) % images.length);
  };

  const ImagenPrevia = () => {
    setOrdenActualImagen((OrdenPrevio) =>
      OrdenPrevio === 0 ? images.length - 1 : OrdenPrevio - 1
    );
  };

  return (
    <div>
      <button className="nav-button" onClick={ImagenPrevia}>
        &#8249;
      </button>
      <CarruselItem image={images[ordenActualImagen]} className="imagen-fondo-header"/>
      <button className="nav-button" onClick={siguienteImagen}>
        &#8250;
      </button>
    </div>
  );
};

CarruselItem.propTypes = {
    image: PropTypes.node.isRequired,
}
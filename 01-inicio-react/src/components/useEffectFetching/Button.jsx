import React from "react";
import carrito from "../../assets/carrito.png"; // Corregido para importar correctamente la imagen

const Button = (props) => {
  const { className, onClick } = props;

  return (
    <button onClick={onClick} className={className}>
      <img src={carrito} alt="Carrito" className="w-5 h-5 inline-block mr-4" />
      {props.children}
    </button>
  );
};

export default Button;

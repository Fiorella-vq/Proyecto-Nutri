import React from "react";
import { Link } from "react-router-dom";
import IMAGE from "../../img/IMAGE.png"; // Asegúrate de que la ruta sea correcta

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <img 
          src={IMAGE} 
          alt="Logo" 
          className="img-fluid w-25" 
        />
      </div>
    </nav>
  );
};



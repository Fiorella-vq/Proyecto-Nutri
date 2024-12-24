import React from "react";

export const Footer = () => (
  <footer
    className="footer mt-auto py-2 text-center"
    style={{
      position: "relative",
      padding: "20px",
      backgroundColor: "white",
      color: "black",
      textAlign: "center",
    }}
  >
    {/* Marca de agua como imagen */}
    <div
      style={{
        position: "absolute",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)", 
        zIndex: -1,
        opacity: 0.1,
        backgroundImage: "url('ruta-a-tu-imagen.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "100%", 
        height: "100px", 
      }}
    ></div>
    <div>
    </div>
    <div className="d-flex flex-wrap justify-content-center">
      <div className="d-flex align-item-center me-2">
        <i className="fa-solid fa-user mt-1 me-1" style={{ color: "green" }}></i>
        <p>Matías Viscardi</p>
      </div>

      <div className="d-flex align-item-center me-2">
        <i className="fa-brands fa-whatsapp mt-1 me-1" style={{ color: "green" }}></i>
        <p>095652214587</p>
      </div>

      <div className="d-flex align-item-center me-2">
        <i className="fa-brands fa-instagram mt-1 me-1" style={{ color: "green" }}></i>
        <p>matias_viscardi</p>
      </div>
    </div>
  </footer>
);

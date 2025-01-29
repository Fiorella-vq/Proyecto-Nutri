import React from "react";
import "../../styles/footer.css";

export const Footer = () => {

  const iniciarAsesoria = () => {
    window.open("https://wa.me/59896540724", "_blank");
  };

  const abrirOutlook = () => {
    window.location.href = "mailto:matias.viscardi@gmail.com?subject=Asesoría Nutricional";
  };

  const agendaCita = () => {
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Cita+con+Matias+Viscardi&details=Agendar+cita+de+nutrición&location=&dates=20250205T140000Z/20250205T150000Z`;
    window.open(url, '_blank');
  };

  return (
    <footer className="footer">
      <div className="watermark"></div>
      <div className="contact-container">
        <div className="contact-info">
          <p>Lic. en Nutrición Matias Viscardi</p>
        </div>

        <div className="contact-details">
          {/* Botón que redirige a WhatsApp */}
          <button className="floating-button" onClick={iniciarAsesoria}>
            <img
              src="https://ariapsa.com/wp-content/uploads/2024/08/ICONO-MINI-Ariapsa-5.png"
              alt="Icono Ariapsa"
            />
            Consultas WhatsApp
          </button>

          {/* Botón que abre Outlook para enviar un correo */}
          <button className="outlook-button" onClick={abrirOutlook}>
            <i className="fa-brands fa-microsoft"></i> Consultas Correo electrónico
          </button>

          {/* Botón para agendar cita */}
          <button className="floating-button" onClick={agendaCita}>
            <i className="fa-solid fa-calendar-check"></i> Agendar cita
          </button>
        </div>
      </div>
      <div className="hfe-copyright-wrapper">
        <p>Copyright © 2025 FVQ</p>
      </div>

    </footer>

  );
};

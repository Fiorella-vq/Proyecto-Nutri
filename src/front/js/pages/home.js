import React from "react";

export const Home = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://blog.dietbox.me/wp-content/uploads/2017/07/como-realizar-a-avaliacao-antropometrica-da-maneira-correta.jpeg"
              className="d-block w-100"
              alt="Evaluación antropométrica"
              style={{
                objectFit: "cover",
                height: "60vh", 
                maxHeight: "500px", 
              }}
            />
            <div className="carousel-caption text-start">
              <button className="btn btn-success">Leer Más...</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://blog.planseguro.com.mx/wp-content/uploads/2023/03/en-que-consiste-un-plan-de-alimentacion.jpg"
              className="d-block w-100"
              alt="Plan de Alimentación"
              style={{
                objectFit: "cover",
                height: "60vh", 
                maxHeight: "500px", 
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://saludybienestar.segurcaixaadeslas.es/sites/default/files/blog_entry/images/aire_libre.jpg"
              className="d-block w-100"
              alt="Aire libre"
              style={{
                objectFit: "cover",
                height: "60vh", 
                maxHeight: "500px", 
              }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

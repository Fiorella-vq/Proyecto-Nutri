import React from "react";
import life from "../../img/life.png";
import eat from "../../img/eat.png";
import plan from "../../img/plan.png";
import sport from "../../img/sport.png";
import peso from "../../img/peso.png";
import { Link } from "react-router-dom";

export const Services = () => {
  const imageStyle = {
    transition: "transform 0.5s ease, box-shadow 0.5s ease, filter 0.3s ease",
    cursor: "pointer",
  };

  return (
    <div className="d-flex flex-column align-items-center m-5">
      <div className="d-flex justify-content-center mb-3">
       
        <div className="mx-2">
          <Link to="/life" style={{ display: 'block' }}>
            <img
              src={life}
              className="rounded-circle"
              alt="Imagen 1"
              style={imageStyle}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.2) translateY(-10px)";
                e.target.style.filter = "brightness(1.2)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1) translateY(0)";
                e.target.style.filter = "brightness(1)";
              }}
            />
          </Link>
        </div>

        <div className="mx-2">
          <Link to="/eat" style={{ display: 'block' }}>
            <img
              src={eat}
              className="rounded-circle"
              alt="Imagen 2"
              style={imageStyle}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.2) translateY(-10px)";
                e.target.style.filter = "brightness(1.2)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1) translateY(0)";
                e.target.style.filter = "brightness(1)";
              }}
            />
          </Link>
        </div>

        <div className="mx-2">
          <Link to="/plan" style={{ display: 'block' }}>
            <img
              src={plan}
              className="rounded-circle"
              alt="Imagen 3"
              style={imageStyle}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.2) translateY(-10px)";
                e.target.style.filter = "brightness(1.2)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1) translateY(0)";
                e.target.style.filter = "brightness(1)";
              }}
            />
          </Link>
        </div>

        <div className="mx-2">
          <Link to="/sport" style={{ display: 'block' }}>
            <img
              src={sport}
              className="rounded-circle"
              alt="Imagen 4"
              style={imageStyle}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.2) translateY(-10px)";
                e.target.style.filter = "brightness(1.2)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1) translateY(0)";
                e.target.style.filter = "brightness(1)";
              }}
            />
          </Link>
        </div>

        <div className="mx-2">
          <Link to="/peso" style={{ display: 'block' }}>
            <img
              src={peso}
              className="rounded-circle"
              alt="Imagen 5"
              style={imageStyle}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.2) translateY(-10px)";
                e.target.style.filter = "brightness(1.2)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1) translateY(0)";
                e.target.style.filter = "brightness(1)";
              }}
            />
          </Link>
        </div>
      </div>

      <Link to="/" className="btn" style={{ backgroundColor: "#2E8B57 ", color: "whitesmoke" }}>
      <i class="fa-solid fa-house"></i>
      </Link>
    </div>
  );
};

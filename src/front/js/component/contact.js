import React from "react";
import { Link } from "react-router-dom"; 
import user from "../../img/user.jpg";


export const Contact = () => {
  return (
    <div className="d-flex justify-content-center align-items-start m-2">
      
      <div className="card" style={{ width: "18rem" }}>
        <img src={user} className="card-img-top" alt="User Profile" />
        <div className="card-body">
          <h5 className="card-title">Matías Viscardi</h5>
          <p className="card-text">
            +59898989898
          </p>
          <div className="text-center">  
            <Link to="/" className="btn" style={{ backgroundColor: "#2E8B57", color: "whitesmoke" }}>
              <i className="fa-solid fa-house"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

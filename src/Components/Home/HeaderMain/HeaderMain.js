import React from "react";
import { Link } from "react-router-dom";
import chair from "../../../images/chair.png";
const HeaderMain = () => {
  return (
    <main style = {{height: '600px'}} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style = {{color: '#3A4256'}}>
          Your New Smile <br /> Start Here
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ex
          voluptates eaque mollitia reiciendis dolorum illo.
        </p>
        <Link to="/appointment" className="btn btn-primary">GET APPOINTMENT</Link>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;

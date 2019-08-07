import React from "react";
import "./style.css";

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 offset-md-right-2">
            <h3>
              Click on an image to earn points, but don't click on it more than
              once!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;

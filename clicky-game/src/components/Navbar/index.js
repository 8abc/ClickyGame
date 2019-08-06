import React from "react";
import "./style.css";

const Navbar = prop => (
  <div className="navbar">
    {/* <div className="title">{props.children}</div> */}
    <div className="scores">Score: | Highscore:</div>
  </div>
);

export default Navbar;

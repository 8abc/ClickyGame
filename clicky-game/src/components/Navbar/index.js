import React from "react";
import "./style.css";

const Navbar = prop => (
  <div className="navbar">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} | Highscore: {props.highscore}
    </div>
  </div>
);

export default Navbar;

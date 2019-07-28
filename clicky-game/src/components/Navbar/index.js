import React from "react";

const Navbar = prop => (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand white-text" href="/">
      <h2>Clicky Game</h2>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            Click an image to begin the game!
          </a>
        </li>
      </ul>
      <span class="navbar-text-white">
        <h3>Score: 0 | Top Score: 0</h3>
      </span>
    </div>
  </nav>
);

export default Navbar;

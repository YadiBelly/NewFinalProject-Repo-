import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Schedule appointment
        </a>
        <a class="navbar-brand" href="#">
          Calendar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="topnav">
          <a class="active" href="#home">
            Home
          </a>
          <a href="#about">Sign Up/</a>
          <a href="#contact">Create Account</a>
          <div class="login-container">
            <form action="/action_page.php" />
            <input type="text" placeholder="Email" name="email" />
            <input type="text" placeholder="Password" name="psw" />
            <button type="submit">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

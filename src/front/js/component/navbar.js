import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <i class="fas fa-car"></i>

    <h1>VEHICLE MAINTANCE TRACKER</h1>

    <div class="topnav">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>

        <a href="#about">Sign Up/</a>
        <a href="#contact">Create Account</a>
      </div>

      <div class="login-container">
        <form action="/action_page.php" />
        <input type="text" placeholder="Email" name="email" />
        <input type="text" placeholder="Password" name="psw" />
        <button type="submit">Login</button>
      </div>
    </div>
  </nav>
);

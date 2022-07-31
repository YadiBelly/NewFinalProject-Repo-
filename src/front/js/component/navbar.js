import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light d-flex">
      <div className="d-flex justify-content-start">
        <Link to="/">
          <button type="button" className="button1 btn">
            <h1>Vehicle Maintance Tracker</h1>
          </button>
        </Link>
      </div>
      <div className="ml-auto">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/">
              <span className="nav-link active" aria-current="page">
                Schedule Appointment
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/calendar">
              <span className="nav-link">
                <i className="far fa-calendar-alt fa-2x"></i>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

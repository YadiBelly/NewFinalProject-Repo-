import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineBell } from "react-icons/ai";
import { BsQuestionLg } from "react-icons/bs";
import vmt from "../../img/vmt.png";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (

    <div className="text-center mt-5">
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
      </div>
      <h1 class="uppercase">VEHICLE MAINTANCE TRACKER</h1>
      <p></p>
       <div>
    <p className="uppercase mt-5">
        <img src={vmt} />
      </p>

    <div className="belle">
      <AiOutlineBell className="bell" alt="..." />
      <p className="p1">
        <strong>
          This application is to help individuals with alerts on a vehicle with
          any necessary maintenance. Individuals , who are not knowledgeable on
          vehicles or sufficient with updated maintenance can now keep track of
          the last and next maintenance needed along with obtaining details on
          why a particular service is needed.
        </strong>
      </p>
    </div>
    <div className="quee">
    <BsQuestionLg className="que" />
      <p className="p2">
      <strong>
                    This application is different from others because it allows
                    users to stay on schedule with auto services. This app also
                    lets the user know the reason for the service and how it can
                    benefit the vehicle.
                  </strong>
      </p>
      
    </div>

    </div>
  );
};

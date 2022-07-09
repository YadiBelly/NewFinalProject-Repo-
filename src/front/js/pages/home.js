import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineBell } from "react-icons/ai";
import { BsQuestionLg } from "react-icons/bs";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1 class="uppercase">VEHICLE MAINTANCE TRACKER</h1>
      <div className="belldiv">
        <AiOutlineBell className="bell" />
        <p className="page">
          <strong>
            This application is to help individuals with alerts on a vehicle
            with any necessary maintenance. Individuals , who are not
            knowledgeable on vehicles or sufficient with updated maintenance can
            now keep track of the last and next maintenance needed along with
            obtaining details on why a particular service is needed.
          </strong>
        </p>
      </div>
      <div>
        <BsQuestionLg />
        <p>
          This application is different from others because it allows users to
          stay on schedule with auto services. This app also lets the user know
          the reason for the service and how it can benefit the vehicle.
        </p>
      </div>
    </div>
  );
};

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
    <div className="mt-5">
      <p className="uppercase">
        <img src={vmt} />
      </p>
      <div class="row justify-content-center">
        <div className="card mb-7 w-60" style={{ width: 999 }}>
          <div className="row g-0">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  <AiOutlineBell className="bell" alt="..." />
                </h5>
                <p className="card-text">
                  <strong>
                    This application is to help individuals with alerts on a
                    vehicle with any necessary maintenance. Individuals , who
                    are not knowledgeable on vehicles or sufficient with updated
                    maintenance can now keep track of the last and next
                    maintenance needed along with obtaining details on why a
                    particular service is needed.
                  </strong>
                </p>
                <p className="card-text">
                  <small className="text-muted"></small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-7 w-60" style={{ width: 999 }}>
          <div className="row g-0">
            <div className="col-md-4">
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"><BsQuestionLg className="que" /></h5>
                <p className="card-text"><strong>
                  This application is different from others because it allows users to
                  stay on schedule with auto services. This app also lets the user know
                  the reason for the service and how it can benefit the vehicle.</strong>
                </p>
                <p className="card-text">
                  <small className="text-muted"></small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

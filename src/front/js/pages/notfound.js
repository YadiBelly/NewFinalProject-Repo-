import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Scheduler, { Resource } from "devextreme-react/scheduler";

export const Notfound = () => {
  
  return (
  <h1>Not found!</h1>
  );
};

import React from "react";
import "../../styles/home.css"
// import App from "../pages/calendar.js"
import ApiCalendar from 'react-google-calendar-api';

const config = {
  "clientId": "<CLIENT_ID>",
  "apiKey": "<API_KEY>",
  "scope": "https://www.googleapis.com/auth/calendar",
  "discoveryDocs": [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ]
}

const apiCalendar = new ApiCalendar(config)

/**
     * Sign in with a Google account.
     * @returns {any} A Promise that is fulfilled with the GoogleUser instance when the user successfully authenticates and grants the requested scopes, or rejected with an object containing an error property if an error happened
     */
 public handleAuthClick(): void

 /**
     * Sign out user google account
     */
  public handleSignoutClick(): void
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Forgot } from "./pages/forgot";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Notfound } from "./pages/notfound";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Calendar } from "./pages/calendar";
import { CreateAccount } from "./pages/CreateAccount";

//import { EditProfile } from "./pages/EditProfile";
//import { ForgotPassword } from "./pages/ForgotPassword";
//import { PasswordReset } from "./pages/PasswordReset";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
            <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Calendar />} path="/calendar" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Forgot />} path="/forgot" />
            <Route element={<CreateAccount />} path="/CreateAccount" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Notfound />} path="*" />
          </Routes>
           <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

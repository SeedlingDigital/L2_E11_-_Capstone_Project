import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../../Components/Navbar/NavBar";
import "./LandingPage.css";


const LandingPage = () => {

  const location = useLocation();

  //Pass in the userName to the landing page
  const data = location.state;



    return (
        <div className="landing-page">
        <NavBar />
          <div className={"wrapper"}>

          </div>
        </div>
    );
}

export default LandingPage;
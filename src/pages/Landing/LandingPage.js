import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../Components/Navbar/NavBar";
import "./LandingPage.css";
import Navbar2 from "../../Components/Navbar/Navbar2";
import LandingCard from "../../Components/Card/LandingCard";
import image1 from "../../Assets/images/landing/vegetablesproduct.png";
import image2 from "../../Assets/images/landing/commingsoon2.png";

const LandingPage = () => {

  const location = useLocation();
const navigate = useNavigate();
  //Pass in the userName to the landing page
  const data = location.state;

    return (
       // <body className={"landing-body"}>
        <div  className={"landing-body"}>
          {/*<div className={"landing-wrapper"}>*/}
            <LandingCard className={"landing-wrapper"} title={"Vegetable Products"} subtitle={""} text={""} navigatePath={"/products"} image={image1} imageAltDescription={"Vegetable Products"}/>
            <LandingCard title={"Fruit Products"} subtitle={""} text={"Coming soon"} image={image2} imageAltDescription={"Fruit Products"}/>
          {/*</div>*/}
        </div>
       // </body>

    );
}

export default LandingPage;
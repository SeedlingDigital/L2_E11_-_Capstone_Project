import React from "react";
import "./LandingPage.css";
import LandingCard from "../../Components/Card/LandingCard";
import image1 from "../../Assets/images/landing/vegetablesproduct.png";
import image2 from "../../Assets/images/landing/commingsoon2.png";

const LandingPage = () => {
  // Display two cards to select the shopping category
    return (
   <div  className={"landing-body"}>
            <LandingCard className={"landing-wrapper"} title={"Vegetable Products"} subtitle={""} text={""} navigatePath={"/products"} image={image1} imageAltDescription={"Vegetable Products"}/>
            <LandingCard title={"Fruit Products"} subtitle={""} text={"Coming soon"} image={image2} imageAltDescription={"Fruit Products"}/>
        </div>
    );
}

export default LandingPage;
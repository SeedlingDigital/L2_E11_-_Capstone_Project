import React from 'react';
import "./Navbar2.css"
import {Link, useMatch, useResolvedPath} from "react-router-dom";


const Navbar2 = () => {

  function CustomLink({toAddress, linkText, ...props})
  {
    const path = window.location.pathname;
    const resolvedPath = useResolvedPath(toAddress);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return (
        <li className = {isActive ? "active" : ""}>
          <Link to={toAddress} {...props}>{linkText}</Link>
        </li>
    );
  }



  return (
      <nav className={"navbar2-nav"}>
        <a href="/" className={"navbar2-title"}>Fresh Produce</a>
        <ul>
          <CustomLink toAddress={"/landing"} linkText={"Landing"}/>
          <CustomLink toAddress={"/products"} linkText={"Products"}/>
          <CustomLink toAddress={"/cart"}  linkText = {"Cart"}/>
          <CustomLink toAddress={"/"} linkText={"Logout"}/>

        </ul>
      </nav>
  );
}
export default Navbar2;
import React, { useEffect }from "react";
import './App.css';
import LoginPage from "./pages/UserAuth/LoginPage";
import {Route, Routes, useMatch, useResolvedPath} from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import CartPage from "./pages/Cart/CartPage";
import ProductPage from "./pages/Products/ProductPage";
import Navbar2 from "./Components/Navbar/Navbar2";

function App() {

  //Diffrent body classes for each page
  // const useBodyClass = (className) => {
  //   useEffect(() => {
  //     document.body.className = className; // Apply the class to body
  //     return () => {
  //       document.body.className = ""; // Remove class when unmounted
  //     };
  //   }, [className]);
  // };
  //
  // const useBodyImage = (imageName) => {
  //   useEffect(() => {
  //     document.body.style.backgroundImage = imageName;
  //     document.body.style.backgroundSize = "cover"; // Ensure image covers the screen
  //     document.body.style.backgroundRepeat = "no-repeat";
  //     document.body.style.backgroundPosition = "center center";
  //     return () => {
  //       document.body.style.backgroundImage = ""; // Reset when unmounting
  //     };
  //   }, [imageName]);
  // };
  //
  // const LoginPage = () => {
  //   useEffect(() => {
  //     document.body.style.backgroundImage = "url('../../Assets/images/backgrounds/vegetables_background2.jpg')";
  //     document.body.style.backgroundSize = "cover"; // Ensure image covers the screen
  //     document.body.style.backgroundRepeat = "no-repeat";
  //     document.body.style.backgroundPosition = "center center";
  //     return () => {
  //       document.body.style.backgroundImage = ""; // Reset when unmounting
  //     };
  //   }, []);
  //
  //   return LoginPage;//<h1>Welcome to the Home Page</h1>;
  // };


  // const LoginPage = () => {
  //   useBodyClass("login-body");
  //   return <h1></h1>;
  // };
  //
  //
  // const LandingPage = () => {
  //   useBodyClass("landing-body");
  //   return <h1></h1>;
  // };
  //
  // const ProductPage = () => {
  //   useBodyClass("product-body");
  //   return <h1></h1>;
  // };
  //
  // const CartPage = () => {
  //   useBodyClass("cart-body");
  //   return <h1></h1>;
  // };


  // const resolvedPath = useResolvedPath(toAddress);
  // const isActive = useMatch({path: resolvedPath.pathname, end: true});

  return (
      <>
        {!useMatch({path: useResolvedPath("/").pathname, end: true}) ? <Navbar2 /> : null}
        {/*<Navbar2 />*/}
        <div>
          <Routes>
            <Route exact path="/" element={<LoginPage/>}/>
            <Route exact path="/landing" element={<LandingPage/>}/>
            <Route exact path="/products" element={<ProductPage/>}/>
            <Route exact path="/cart" element={<CartPage/>}/>
          </Routes>
        </div>
        </>
  );
}

export default App;

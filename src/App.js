import React, { useEffect }from "react";
import './App.css';
import LoginPage from "./pages/UserAuth/LoginPage";
import {Route, Routes, useMatch, useResolvedPath} from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import CartPage from "./pages/Cart/CartPage";
import ProductPage from "./pages/Products/ProductPage";
import Navbar2 from "./Components/Navbar/Navbar2";

function App() {

  return (
      <>
        // Dont display the navbar on Login.
        {!useMatch({path: useResolvedPath("/").pathname, end: true}) ? <Navbar2 /> : null}

        // Use Routes to navigate between pages.
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

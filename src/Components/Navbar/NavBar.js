import React from 'react';
import '../Navbar/Navbar.css'

const NavBar = () => {

  return (
      <div>
        <header className={"navbar-header"}>
          <a href="/" className={"logo"}>Logo here</a>
          <span>
          <nav  className={"navbar-nav"}>
        <a href="/landing">Home</a>
        <a href="/products">Products</a>
        <a href="/cart">Cart</a>
        <a href="/">Logout</a>
          </nav>
            </span>
        </header>
      </div>
  );

}

export default NavBar;


/*
<div>
        <header className={"navbar-header"}>
          <a href="/" className={"logo"}>Logo here</a>
          <span>
        <nav className={"navbar-nav"}>
          <a href="/landing">Home</a>
          <a href="/products">Products</a>
          <a href="/cart">Cart</a>
          <a href="/">Logout</a>
        </nav>
</span>
        </header>
      </div>
 */
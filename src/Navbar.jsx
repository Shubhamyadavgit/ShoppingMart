import React from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
      <div className="logo">
        <ShoppingBasketIcon />
        <h1>Shopping Mart</h1>
      </div>
        <ul className="navbar-list">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

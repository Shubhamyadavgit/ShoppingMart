import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cartItems = useSelector((state)=> state.cart.cartItems)
  const totalQuantity = cartItems.reduce((total,item)=> total+item.quantity,0);
  return (
    <>
      <nav className="navbar">
      <NavLink to={'/'}>
        <div className="logo">
          <ShoppingBasketIcon />
          <h1>Shopping Mart</h1>
        </div>
        </NavLink>
        <ul className="navbar-list">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
          <NavLink to={"/cart"}>
              <ShoppingCartIcon />
              {totalQuantity > 0 && (
                <span
  style={{
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '70%',
    padding: '6px',
    fontSize: '12px',
    height: '20px',
    width: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  {totalQuantity}
</span>

              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

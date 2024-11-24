import { Link, useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  const userLog = useSelector((store) => store.user)

  const handleLogoClick = () => {
    navigate("/");  // Navigate to the home page when the logo is clicked
  };

  return (
    <div className="Header shadow-md sticky">
      <div className="logo">
        <img src={LOGO} alt="Logo" className="logo" onClick={handleLogoClick} />
      </div>
      <div className="nav-items m-6 font-bold text-2xl">
        <ul className="flex">
          <li className="link px-6">
            <Link to="/" className="link">Home</Link>
          </li>
          <li className="link px-6">
            <Link to="/cart" className="link flex text-red-600
            "> <img className="h-10 rounded-3xl hover:none" src="https://static.vecteezy.com/system/resources/previews/000/441/347/original/vector-shopping-cart-icon.jpg" alt="" /> ({cartItems.length})</Link>
          </li>
          <li className="link px-6">
            {/* <button className="hover:underline" onClick={handleLoginForm}>Login</button> */}
            <Link to="/login" className="link">Login</Link>
          </li>
        </ul>
      </div>

     
    </div>
  );
};

export default Header;

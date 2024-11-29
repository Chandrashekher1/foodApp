import { Link, useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  const userLog = useSelector((store) => store.user)
  console.log(userLog);
  // if(userLog){
  //   setLoggedIn(true)
  // }

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
            <Link to="/cart" className="link flex text-green-900
            "> <img className="h-10 rounded-3xl hover:none" src="https://raw.githubusercontent.com/ivanoff/react-native-ico-shopping/HEAD/static/shopping-cart.png" alt="" /> ({cartItems.length})</Link>
          </li>
          <li className="link px-6">
            <Link to="/login" className="link text-base flex"><img className="h-10 w-12 rounded-3xl" src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="" /><span className="mt-2">Sign In</span></Link>
          </li>
        </ul>
      </div>

     
    </div>
  );
};

export default Header;

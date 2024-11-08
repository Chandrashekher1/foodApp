import { Link, useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { useSelector } from "react-redux";
import React, { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  
  const [isModalVisible, setModalVisible] = useState(false); // State to manage modal visibility

  const handleLogoClick = () => {
    navigate("/");  // Navigate to the home page when the logo is clicked
  };

  const handleLoginForm = () => {
    setModalVisible(true);  // Show the modal when the login button is clicked
  };

  const closeModal = () => {
    setModalVisible(false); // Close the modal
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
            <Link to="/cart" className="link"> Cart ({cartItems.length} items)</Link>
          </li>
          <li className="link px-6">
            <button className="hover:underline" onClick={handleLoginForm}>Login</button>
          </li>
        </ul>
      </div>

      {/* Modal Popup */}
      {isModalVisible && (
        <>
          <div className="modal-overlay"></div>
          <div className="modal-content">
            <h2>Login</h2>
            <input type="text" placeholder="Phone number" className="modal-input" />
            <button onClick={() => alert('Login attempt')}>Login</button>
            <button onClick={closeModal} className="modal-close mx-4">Close</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;

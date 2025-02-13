import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleSignout = () => {
    logout()
      .then(() => {})
      .catch(() => {});
  };
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link to="/myreviews">My Reviews</Link>
          </li>
          <li>
            <Link to="/addservice">Add Service</Link>
          </li>
          <li>
            <button onClick={handleSignout}>Sign Out</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 w-9/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <img src={logo} className="w-8" alt="" />
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <span className="text-orange-500">Speedy</span> Service
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Header;

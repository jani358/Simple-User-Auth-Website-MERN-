import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  // Check if user is signed in by presence of token in localStorage
  const isUserSignedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  // Function to handle user sign out
  const handleSignOut = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/login");
  };

  return (
    <nav className="flex justify-around p-3 border-b border-gray-400 items-center bg-gray-900 text-white">
      <Link to="/">
        <h1 className="text-3xl font-semibold">MERN AUTH</h1>
      </Link>
      <ul className="flex gap-6">
        {isUserSignedIn ? (
          <>
            <Link to="/account">
              <li className="text-lg font-medium hover:text-teal-300 transition duration-300">Account</li>
            </Link>
            <li>
              <button
                onClick={handleSignOut}
                className="text-lg font-medium hover:text-teal-300 transition duration-300"
              >
                Sign Out
              </button>
            </li>
          </>
        ) : (
          <>
            <Link to="/login">
              <li className="text-lg font-medium hover:text-teal-300 transition duration-300">Login</li>
            </Link>
            <Link to="/signup">
              <li className="text-lg font-medium hover:text-teal-300 transition duration-300">Signup</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

import cocktailLogo from "../assets/cocktail-logo.png"

function NavBar() {
  return (
    <nav className="bg-orange-50 py-5">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link to="/">
             <img src={cocktailLogo} alt="cocktail logo" className="w-28 rounded-full"/>
          </Link>
        </div>
        <ul className="flex ml-auto mr-10 py-2">
          <li className="mr-4">
            <Link to="/" className="text-gray-800 hover:text-gray-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-800 hover:text-gray-600">
              About App
            </Link>
          </li>
        </ul>
        <div>
          {/* <div className="flex justify-center">
            <button
              id="themeToggle"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Toggle Theme
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

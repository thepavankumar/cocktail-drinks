import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-sm">© {new Date().getFullYear()}&nbsp;Pavan kumar</div>
        <ul className="flex space-x-4">
          <li>
          <Link to="/" className="text-white-800 hover:text-gray-600">
              Home
            </Link>
          </li>
          <li>
          <Link to="/about" className="text-white-800 hover:text-gray-600">
              About App
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import UserDropdown from "./UserDropdown";

const Header = () => {
  return (
    <div className="header">
      <header className="fixed top-0 left-0 w-full bg-white shadow-lg backdrop-filter backdrop-blur-md z-50">
        <div className="container mx-auto px-4 flex items-center">
          <Link to="/admin/">
            <img src={logo} alt="logo" className="w-20 h-20 mr-10" />
          </Link>
          <div className="flex-grow">
            <Link
              to="/admin/"
              className="text-2xl font-bold text-gray-800 mr-10 font-webbelliscup"
            >
              Back-office
            </Link>
            <Link
              to="/admin/demandes"
              className="text-xl font-bold text-gray-500 mr-10 font-webbelliscup"
            >
              Demandes
            </Link>
            <Link
              to="/admin/accreditations"
              className="text-xl font-bold text-gray-500 mr-10 font-webbelliscup"
            >
              Accréditations
            </Link>
            <Link
              to="/admin/rapports"
              className="text-xl font-bold text-gray-500 mr-10 font-webbelliscup"
            >
              Rapports
            </Link>
            <Link
              to="/admin/chat"
              className="text-xl font-bold text-gray-500 mr-10 font-webbelliscup"
            >
              Chat
            </Link>
          </div>
          <div className="ml-auto">
            <UserDropdown />
          </div>
        </div>
      </header>
      <div className="mb-16"></div>
    </div>
  );
};

export default Header;

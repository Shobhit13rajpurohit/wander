import React from "react";
import Image from "next/image";
import { Menu, Globe } from "lucide-react";
import logo from "../static/images/logo.png"; 

const Header = () => {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-4/5 bg-white/80 backdrop-blur-md shadow-md rounded-b-2xl px-6 md:px-12 lg:px-20 py-3 flex items-center justify-between z-50">
    <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
      {/* Left - Logo and Navigation */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">Flytzen.com</h1>
  
        {/* Navigation Buttons */}
        <nav className="hidden md:flex space-x-4">
          <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100">
            Stays
          </button>
          <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100">
            Flights
          </button>
          <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100">
            Activities
          </button>
        </nav>
      </div>
  
      {/* Center - Offers & Rewards */}
      <div className="hidden md:flex space-x-4">
        <button className="bg-red-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
          BUY PRESENTS
        </button>
        <span className="text-sm font-medium text-gray-700">
          TRAVEL GIFT CARDS
        </span>
  
        <button className="bg-red-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
          🎁 REWARDS!
        </button>
        <span className="text-sm font-medium text-gray-700">
          AVA SMART PROGRAM
        </span>
      </div>
  
      {/* Right - Language, Login, Register, and Menu */}
      <div className="flex items-center space-x-4">
        {/* Language & Currency */}
        <div className="flex items-center space-x-1">
          <img alt="USA flag" src="../static/images/logo.png" className="w-5 h-5" />
          <span className="text-sm font-medium">USD</span>
        </div>
  
        {/* Log In & Register */}
        <button className="border px-4 py-2 text-sm rounded-md hover:bg-gray-100">
          LOG IN
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-600">
          REGISTER
        </button>
  
        {/* Mobile Menu */}
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </div>
  </header>
  
  );
};

export default Header;

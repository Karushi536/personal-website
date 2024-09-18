// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Abigael Karushi</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-white">Home</a></li>
          <li><a href="#about" className="text-white">About Me</a></li>
          <li><a href="#projects" className="text-white">Projects</a></li>
          <li><a href="#services" className="text-white">Services</a></li>
          <li><a href="#contact" className="text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Abigael Karushi. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-4">
          <li><a href="#" className="text-white">LinkedIn</a></li>
          <li><a href="#" className="text-white">GitHub</a></li>
          {/* Add more social links here */}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

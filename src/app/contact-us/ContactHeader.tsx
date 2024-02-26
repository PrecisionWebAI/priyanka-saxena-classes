// src/components/Navbar.tsx

import React from 'react';

const NavbarComponent: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="text-white text-2xl font-bold">Contact Us</a>

          <div className="space-x-4">
            <a href="/about" className="text-white" style={{fontSize:"16px",color:"green"}}>Home</a>
            <a href="/services" className="text-white">Services</a>
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;

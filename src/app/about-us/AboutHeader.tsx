import React from "react";

const NavbarComponents: React.FC = () => {
  return (
    <nav className="bg-[#222] p-4 w-full flex border-t border-accent">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="text-white text-2xl font-bold">
            About Us
          </a>

          <div className="space-x-4">
            <a
              href="/about"
              className="text-white"
              style={{ fontSize: "16px", color: "green" }}
            >
              Home
            </a>
            <a href="/services" className="text-white">
              Services
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavbarComponents;

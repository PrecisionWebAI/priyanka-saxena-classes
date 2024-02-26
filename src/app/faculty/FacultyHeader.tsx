import React from 'react';
import { TbPoint } from "react-icons/tb";


const FacultyHeader: React.FC = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="text-white text-2xl font-bold">Faculty</a>

          <div className="space-x-4">
            <a href="/about" className="text-white">Home</a>
            <a href="/services" className="text-white" style={{marginRight:"30px"}}>Services</a>
           
          </div>
        </div>
      </div>
    </nav>
  );
};
export default FacultyHeader;

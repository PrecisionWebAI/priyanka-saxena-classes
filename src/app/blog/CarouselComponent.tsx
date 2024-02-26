import React from "react";

const CarouselCompnent: React.FC = () => {
  return (
    <div className="bg-green-500 h-64 flex justify-center items-center">
      <input
        type="text"
        placeholder="Search"
        className="bg-green px-4 py-2 rounded-md shadow-md"
      />
    </div>
  );
};

export default CarouselCompnent;

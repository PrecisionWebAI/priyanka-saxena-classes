import React from "react";

const Carousel = () => {
  return (
    <div className="bg-yellow-200 h-64 flex items-center justify-center p-0 m-0">
      <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <input
          type="email"
          placeholder="emailadd@gmail.com"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Carousel;

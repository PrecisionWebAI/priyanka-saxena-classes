import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

type Props = {};

const StaticNavbar = (props: Props) => {
  return (
    <div className="bg-white min-h-8 w-full flex justify-center items-center flex-col px-[10%]">
      <div className="bg-primary">StaticNavbar</div>
      <div className="bg-white flex text-black w-full justify-between items-center">
        <Image
          src={"/images/logo.webp"}
          alt="Picture of Logo"
          width={200}
          height={100}
        />
        <div className="flex items-center gap-4 justify-end">
          <div className="flex relative">
            <input
              className="flex items-end border outline-none h-full py-3 px-2"
              placeholder="Enter your search"
            />
            <FaSearch className="absolute right-2 top-0 bottom-0 my-auto cursor-pointer" />
          </div>
          <div className="flex justify-center items-center gap-1 bg-accent px-4 py-3 cursor-pointer">
            <FaCartShopping color="white" />
            <span className="text-white">(0)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticNavbar;

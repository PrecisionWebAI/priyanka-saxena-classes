import Image from "next/image";
import React from "react";
import { FaMailBulk, FaSearch } from "react-icons/fa";
import { FaCartShopping, FaPhone } from "react-icons/fa6";

type Props = {};

const StaticNavbar = (props: Props) => {
  return (
    <div className="bg-white w-full flex justify-center items-center flex-col">
      <div className="bg-primary flex flex-1 w-full px-[10%]">
        <div className="flex py-1 items-center w-full gap-2">
          <span className="px-2 py-1 text-yellow-400 bg-black rounded font-bold flex">
            Update:
          </span>
          <div className="flex w-full overflow-x-hidden relative box-border h-6 justify-center items-center">
            <div className="flex animate-marquee-infinite left-0 right-0 top-0 bottom-0 absolute gap-2 box-border font-bold text-sm">
              <span className="flex min-w-max">
                CMA Inter New Face to Face - Regular Batch (June / Dec 2024)
              </span>
              <span className="flex min-w-max text-red-500">
                Starts from 8th January, 2024 for Group 1 and 8th January, 2024
                for Group 2
              </span>
              <span className="flex min-w-max">
                || For any enquires related to purchase:
              </span>
              <span className="flex min-w-max text-red-500">
                +91 8826602669 / 8287218703
              </span>
              <span className="flex min-w-max">
                || For any Technical support:
              </span>
              <span className="flex min-w-max text-red-500">8790932463</span>
              <span className="flex min-w-max"> or mail at </span>
              <span className="flex min-w-max text-red-500">
                supportncare@priyankasaxenaclasses.com
              </span>
              <span className="flex min-w-max">
                || Payment to be made on GPay / PayTm / Phone Pe:
              </span>
              <span className="flex min-w-max text-red-500"> 88 2660 2669</span>
              <span className="flex min-w-max">
                || For any Bank Account Transfer:
              </span>
              <span className="flex min-w-max text-red-500">
                A/C no. - 631011030182(Kotak)
              </span>
              <span className="flex min-w-max"> Banking Name: </span>
              <span className="flex min-w-max text-red-500">
                Priyanka Saxena
              </span>

              <div className="flex w-full justify-around" />

              <span className="flex min-w-max">
                CMA Inter New Face to Face - Regular Batch (June / Dec 2024)
              </span>
              <span className="flex min-w-max text-red-500">
                Starts from 8th January, 2024 for Group 1 and 8th January, 2024
                for Group 2
              </span>
              <span className="flex min-w-max">
                || For any enquires related to purchase:
              </span>
              <span className="flex min-w-max">
                +91 8826602669 / 8287218703
              </span>
              <span className="flex min-w-max">
                || For any Technical support:
              </span>
              <span className="flex min-w-max">8790932463</span>
              <span className="flex min-w-max"> or mail at </span>
              <span className="flex min-w-max">
                supportncare@priyankasaxenaclasses.com
              </span>
              <span className="flex min-w-max">
                || Payment to be made on GPay / PayTm / Phone Pe:
              </span>
              <span className="flex min-w-max"> 88 2660 2669</span>
              <span className="flex min-w-max">
                || For any Bank Account Transfer:
              </span>
              <span className="flex min-w-max">
                A/C no. - 631011030182(Kotak)
              </span>
              <span className="flex min-w-max"> Banking Name: </span>
              <span className="flex min-w-max">Priyanka Saxena</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center py-1 text-sm">
          <FaPhone />
          <span className="flex">88 2660 2669</span>
          <FaMailBulk className="ml-10" />
          <span className="flex">supportncare@priyankasaxenaclasses.com</span>
        </div>
      </div>
      <div className="bg-white flex text-black w-full justify-between items-center px-[10%]">
        <Image
          src={"/images/logo.webp"}
          alt="Picture of Logo"
          width={180}
          height={70}
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

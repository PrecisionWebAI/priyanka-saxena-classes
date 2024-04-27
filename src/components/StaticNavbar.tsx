"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaMailBulk, FaSearch } from "react-icons/fa";
import { FaCartShopping, FaPhone } from "react-icons/fa6";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {};

const StaticNavbar = (props: Props) => {
  const { push } = useRouter();

  return (
    <div className="bg-white w-full flex justify-center items-center flex-col">
      <div className="bg-primary flex flex-1 w-full px-5 gap-10">
        <div className="flex py-1 items-center gap-2 flex-1 text-white">
          <span className="px-2 py-1 text-yellow-400 bg-black rounded font-bold flex">
            Update:
          </span>
          <div className="flex w-full overflow-x-hidden relative box-border h-6 justify-center items-center">
            <div className="flex animate-marquee-infinite left-0 right-0 top-0 bottom-0 absolute gap-1 box-border font-bold text-sm">
              {/* <Carousel
              autoPlay
              showArrows={false}
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              swipeable={false}
              autoFocus
              centerMode
              infiniteLoop
              // centerSlidePercentage={10}
              interval={500}
              width={"20%"}
            > */}
              {/* <div className="flex w-full justify-around" /> */}
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

              {/* <div className="flex w-full justify-around" /> */}

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
              {/* </Carousel> */}
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center py-1 text-sm text-white">
          <FaPhone />
          <span className="flex min-w-max">88 2660 2669</span>
          <FaMailBulk className="ml-4" />
          <span className="flex">supportncare@priyankasaxenaclasses.com</span>
        </div>
      </div>
      <div className="bg-white flex text-black w-full justify-between items-center px-[10%]">
        <Image
          src={"/images/logo.webp"}
          alt="Picture of Logo"
          width={180}
          height={70}
          sizes="33vw"
          onClick={() => push("/")}
          className="cursor-pointer"
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

"use client";

import Image from "next/image";
import React from "react";
import { FaGoogle, FaStar, FaStarHalf } from "react-icons/fa6";
import ReactPlayer from "react-player";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="flex w-full min-h-[calc(100vh-167px)] gap-4 box-border relative z-0 before:bg-[#A2228F] before:mix-blend-normal before:opacity-[0.83] before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-[1]">
      <div className="w-full absolute left-0 top-0 z-[2]">
        <div className="flex h-2 w-full bg-white" />
        <svg
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 700 10"
          preserveAspectRatio="none"
        >
          <path d="M350,10L340,0h20L350,10z"></path>
        </svg>
      </div>

      <div className="flex absolute w-full h-full overflow-hidden object-cover">
        <ReactPlayer
          playing
          controls={false}
          width="100%"
          height={"auto"}
          url="https://www.youtube.com/watch?v=usjSh2kszWc"
          loop
          muted
          style={{
            objectFit: "cover",
          }}
          config={{
            youtube: {
              playerVars: {
                playsinline: 1,
                showInfo: 0,
              },
            },
          }}
        />
      </div>

      <div className="bg-transparent rotate-180 absolute left-0 w-full bottom-0 z-[2]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          fill="#ffffff"
        >
          <path d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
        </svg>
      </div>

      <div className="flex flex-1 flex-col py-20 pl-20 gap-10 z-[2]">
        <div className="flex gap-4 items-center">
          <div className="text-sm font-semibold text-black flex gap-2 items-center  shadow-md rounded-full py-2 px-4 bg-[#A2228F] hover:text-[#FFFC71] cursor-pointer">
            <FaGoogle />
            <span className="text-base">Rated 4.5 of 5</span>
          </div>
          <div className="flex gap-1">
            <FaStar className="fill-yellow-400 stroke-black" size={22} />
            <FaStar className="fill-yellow-400" size={22} />
            <FaStar className="fill-yellow-400" size={22} />
            <FaStar className="fill-yellow-400" size={22} />
            <FaStarHalf className="fill-yellow-400" size={22} />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="wpr-advanced-text text-[70px] font-semibold text-black leading-[90px]">
            <span className="wpr-advanced-text-preffix">Be a</span>

            <span className="wpr-highlighted-text relative text-left inline-block align-middle mx-3 p-[10px]">
              <span className="wpr-highlighted-text-inner text-white relative z-[1]">
                CMA
              </span>
              {/* SVG Start */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 150"
                className="wpr-highlight-circle"
                preserveAspectRatio="none"
                strokeWidth={10}
                fill="transparent"
                stroke="black"
              >
                <path d="M284.72,15.61C276.85,14.43,2-2.85,2,80.46c0,34.09,45.22,58.86,196.31,62.81C719.59,154.18,467-74.85,109,29.15" />
              </svg>
              {/* SVG End */}
            </span>
            <span className="wpr-advanced-text-suffix">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Rank Holder
            </span>
          </h1>
          <span className="flex text-[#FFFC71] text-xl font-semibold">
            7 Days Free Trial classes for Face to Face
          </span>
          <span className="flex text-">
            Find the best coaching in Laxmi Nagar under one roof
          </span>
        </div>
      </div>
      <div className="flex flex-1 z-0">
        {/* <Image src="/images/banner.webp" alt="Banner Image" fill /> */}
      </div>
    </div>
  );
};

export default Banner;

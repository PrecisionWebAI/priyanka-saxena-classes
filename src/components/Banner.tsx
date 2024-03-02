"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaGoogle, FaStar, FaStarHalf } from "react-icons/fa6";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="flex w-full h-[496px] bg-banner relative gap-4 box-border">
      <div className="flex flex-1 flex-col py-20 pl-20 gap-10">
        <div className="flex gap-4 justify-center items-center">
          <div className="text-sm font-semibold text-black flex gap-2 items-center  shadow-md rounded-full py-2 px-4">
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
          <h1 className="wpr-advanced-text text-[70px] font-bold text-black leading-[90px]">
            <span className="wpr-advanced-text-preffix">Be a</span>

            <span className="wpr-highlighted-text !relative">
              <span className="wpr-highlighted-text-inner text-accent">
                CMA
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 150"
                className="w-full h-[90] z-[1] absolute top-1/2 left-1/2 overflow-visible transform -translate-x-[50%] -translate-y-[50%]"
                preserveAspectRatio="none"
              >
                <path d="M284.72,15.61C276.85,14.43,2-2.85,2,80.46c0,34.09,45.22,58.86,196.31,62.81C719.59,154.18,467-74.85,109,29.15"></path>
              </svg>
            </span>
            <span className="wpr-advanced-text-suffix">
              Rank Holder In June'24
            </span>
          </h1>
          <span className="flex text-accent text-xl">
            7 Days Free Trial classes for Face to Face
          </span>
          <span className="flex text-">
            Find the best coaching in Laxmi Nagar under one roof
          </span>
        </div>
      </div>
      <div className="flex flex-1 relative">
        <Image src="/images/banner.webp" alt="Banner Image" fill />
      </div>
    </div>
  );
};

export default Banner;

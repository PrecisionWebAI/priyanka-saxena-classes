"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import faculty from "@/data/faculty.json";
import Image from "next/image";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("@ntegral/react-owl-carousel"), {
  ssr: false,
});

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const FacultyCarousel = () => {
  if (typeof window === "undefined") return <></>;

  return (
    <div className="flex flex-col max-w-7xl w-full px-4 sm:px-10 py-10 m-auto mt-10 gap-10">
      <div className="flex flex-col sm:flex-row justify-between w-full items-start sm:items-center">
        <div className="text-3xl font-medium mb-4 sm:mb-0">
          <span className="text-text-primary border-b-2 border-b-accent">
            OUR
          </span>
          <span className="text-accent ml-2">FACULTIES</span>
        </div>
        <Link
          href="/faculty"
          className="flex text-white bg-primary rounded-[3px] text-xs py-[5px] px-6 justify-center items-center"
        >
          View More <FaArrowRightLong className="ml-2" />
        </Link>
      </div>
      <div className="flex w-full h-full">
        <OwlCarousel
          className="owl-theme"
          loop
          margin={20}
          autoplay
          items={1}
          responsive={{
            640: { items: 2 },  // sm breakpoint
            768: { items: 3 },  // md breakpoint
            1024: { items: 4 }, // lg breakpoint
          }}
          autoFocus
          autoplayTimeout={3000}
          dotData
        >
          {faculty.slice(0, 8).map((f) => (
            <div
              key={f.name}
              className="flex flex-col w-full h-full item bg-[#f5f5f5]"
            >
              <div className="flex w-full box-border h-0 pb-[100%] relative">
                <Image
                  src={f.imgUrl}
                  alt={f.name}
                  fill
                  style={{ objectFit: "cover", mixBlendMode: "darken" }}
                />
              </div>
              <div className="flex flex-col px-4 gap-4 pb-4">
                <span className="flex text-accent text-lg">{f.name}</span>
                <Link
                  className="ml-auto text-xs text-white bg-primary rounded-[3px] px-4 py-[6px]"
                  href={`/faculty/${f.name}`}
                >
                  view details
                </Link>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default FacultyCarousel;

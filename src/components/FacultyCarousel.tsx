import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import faculty from "@/data/faculty.json";
import Image from "next/image";

import OwlCarousel from "@ntegral/react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

type RenderIndicatorPropsType = {
  clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void;
  isSelected: boolean;
  index: number;
  label: string;
};

const RenderIndicator = ({
  clickHandler,
  isSelected,
  index,
  label,
}: RenderIndicatorPropsType) => {
  return (
    <div
      className={
        "flex w-3 h-3 rounded-full transition-all border-2 border-primary" +
        (isSelected ? " bg-primary" : " bg-white")
      }
      onClick={clickHandler}
    />
  );
};

const FacultyCarousel = () => {
  return (
    <div className="flex flex-col max-w-7xl w-full p-10 m-auto mt-10 gap-10">
      <div className="flex justify-between w-full">
        <div className="text-3xl font-medium">
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
          items={4}
          autoFocus
          autoplayTimeout={1000}
          dotData
          // dotsEach
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

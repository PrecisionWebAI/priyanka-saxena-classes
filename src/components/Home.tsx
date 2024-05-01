"use client";
import React from "react";
import Banner from "./Banner";
import Image from "next/image";
import FacultyCarousel from "./FacultyCarousel";

const whyChoosePCData = [
  {
    text: "Studio Recorded Classes",
    image: "/images/why-pc/studio.webp",
  },
  {
    text: "Supportive Team",
    image: "/images/why-pc/supportive-team.webp",
  },
  {
    text: "Academic Instructure Team",
    image: "/images/why-pc/academic-instructor.webp",
  },
  {
    text: "Study Material Covering all MTP/RTP",
    image: "/images/why-pc/study-material.webp",
  },
  {
    text: "Daily Doubt Session",
    image: "/images/why-pc/daily-doubt.webp",
  },
  {
    text: "Unlimited Views",
    image: "/images/why-pc/unlimited-views.webp",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Banner />
      <div className="bg-accent text-white text-4xl font-bold flex w-full justify-center p-5 text-center">
        Face to Face New Batch Started at Laxmi Nagar
      </div>
      <div className="flex flex-col gap-3 justify-center items-center m-10">
        <span className="text-black text-2xl pb-5 pt-6 font-semibold">
          WHY CHOOSE CLASSES FROM PRIYANKA CLASSES
        </span>
        <div className="flex gap-4 flex-wrap">
          {whyChoosePCData.map((pcd) => (
            <Image
              src={pcd.image}
              alt={pcd.text}
              key={pcd.text}
              width={165}
              height={95}
              className="bg-black rounded-lg"
            />
          ))}
        </div>
      </div>
      <FacultyCarousel />
    </div>
  );
};

export default Home;

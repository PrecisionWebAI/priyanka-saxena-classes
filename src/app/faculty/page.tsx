"use client";
import React from "react";

import FacultyHeader from "@/app/faculty/FacultyHeader";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import faculty from "./faculty.json";

export const faculties = faculty.map((f) => ({
  ...f,
  info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
}));

const Faculty = () => {
  return (
    <React.Fragment>
      <div>
        <FacultyHeader />
        <br />
        <br />
      </div>
      <div className="flex flex-wrap max-w-[80%] m-auto justify-center pb-10">
        <div className="flex flex-wrap justify-center">
          {faculties.map((faculty, index) => (
            <div
              className="flex w-[250px] h-[290px] bg-[#f5f5f5] relative items-end border box-border p-3"
              key={index}
            >
              <Image
                src={faculty.imgUrl}
                alt={faculty.name}
                className="w-full !h-[75%]"
                fill
                loading="lazy"
                sizes="33vw"
              />
              <div className="flex w-full justify-end">
                <Link
                  href={`/faculty/${faculty.name}`}
                  className="bg-primary border border-primary px-3 py-1 text-white text-sm rounded-[4px]"
                >
                  view details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Faculty;

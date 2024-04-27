"use client";
import React from "react";

import FacultyHeader from "@/app/faculty/FacultyHeader";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import faculties from "@/data/faculty.json";

// export const faculties = faculty.map((f) => ({
//   ...f,
//   info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
// }));

const Faculty = () => {
  return (
    <React.Fragment>
      <div>
        <FacultyHeader />
        <br />
        <br />
      </div>
      <div className="flex flex-wrap max-w-7xl m-auto justify-center pb-10 w-full">
        <div className="grid grid-cols-4 flex-wrap gap-5 w-full box-border">
          {faculties.map((faculty, index) => (
            <div
              className="flex w-full bg-[#f5f5f5] items-end border box-border flex-col"
              key={index}
            >
              <div className="flex w-full h-0 pb-[100%] relative">
                <Image
                  src={faculty.imgUrl}
                  alt={faculty.name}
                  fill
                  loading="lazy"
                  sizes="33vw"
                  style={{ mixBlendMode: "darken" }}
                />
              </div>
              <div className="flex w-full justify-end px-5 pb-5 pt-10">
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

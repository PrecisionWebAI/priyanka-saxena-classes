"use client";
import React from "react";

import FacultyHeader from "@/app/faculty/FacultyHeader";
//import "./Faculty.css";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";

export const faculties = [
  {
    name: "Priyanka-Saxena",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-CS-CMA-PRIYANKA-SAXENA-MAM_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty1",
  },
  {
    name: "Santosh-Kumar",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-CMA-SANTOSH-KUMAR_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty2",
  },
  {
    name: "Vishal-Bhattad",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-VISHAL-BHATTAD_PRIYANKA-SAXENA-CLASSES.png",
    info: "",
    mapping: "Faculty3",
  },

  {
    name: "SumitRastogi",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CMA-SUMIT-RASTOGI_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty4",
  },

  {
    name: "Satish-Jalan",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-SATISH-JALAN_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty5",
  },

  {
    name: "Ashutosh-Lata",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-CMA-ASHUTOSH-LATA_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty6",
  },

  {
    name: "Aditya-Jain",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-ADITYA-JAIN_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty7",
  },

  {
    name: "Satyesh-Kumar",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/PROF.-SATYESH-KUMAR_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty8",
  },

  {
    name: "Mohd-Rafi",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/PROF.-MOHD-RAFI_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty9",
  },
  {
    name: "Shivangi-Aggarwal",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-SHIVANI-AGGARWAL_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty10",
  },
  {
    name: "Nikkhil-Gupta",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-CMA-CS-NIKKHIL-GUPTA_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty11",
  },
  {
    name: "Harpal-Yadav",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-HARPAL-YADAV_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty12",
  },
  {
    name: "Vinit-Kumar",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/PROF.-VINIT-KUMAR_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty13",
  },
  {
    name: "Mayank-Agarwal",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/PROF.-MAYAK-AGGARWAL_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty14",
  },
  {
    name: "Amarjit-Kaur",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/ACCA-AMARJIT-KAUR_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty15",
  },
  {
    name: "Divay-Miglani",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-DIVAY-MAGLANI_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty16",
  },

  {
    name: "Abhimanyu-Agarrwal",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CMA-ABHIMANYYU-AGRRAWAL_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty17",
  },

  {
    name: "Sanjay-Welkins",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/PROF.-SANJAY-WELINS_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty18",
  },
  {
    name: "Vasudha-Jain",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/PROF.-VASUDHA-JAIN_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty19",
  },
].map((f) => ({
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
        <div className="flex flex-wrap gap-10 justify-center">
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

"use client";
import React from "react";
import { Link } from "react-router-dom";
import FacultyHeader from "app/faculty/FacultyHeader";
import "./Faculty.css";

export const faculties = [
  {
    name: "Priyanka%20Saxena",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-CS-CMA-PRIYANKA-SAXENA-MAM_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "Information about Priyanka Saxena.",
    mapping: "Faculty1",
  },
  {
    name: "Santosh%20Kumar",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-CMA-SANTOSH-KUMAR_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "Information about Santosh Kumar.",
    mapping: "Faculty2",
  },
  {
    name: "Vishal%20Bhattad",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-VISHAL-BHATTAD_PRIYANKA-SAXENA-CLASSES.png",
    info: "Information about Vishal Bhattad.",
    mapping: "Faculty3",
  },

  {
    name: "Sumit%20Rastogi",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CMA-SUMIT-RASTOGI_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "Information about Priyanka Saxena.",
    mapping: "Faculty4",
  },

  {
    name: "Priyanka%20Saxena",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-SATISH-JALAN_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "Information about Priyanka Saxena.",
    mapping: "Faculty5",
  },

  {
    name: "Priyanka%20Saxena",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-CMA-ASHUTOSH-LATA_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "Information about Priyanka Saxena.",
    mapping: "Faculty6",
  },

  {
    name: "Priyanka%20Saxena",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-ADITYA-JAIN_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "Information about Priyanka Saxena.",
    mapping: "Faculty7",
  },

  {
    name: "Priyanka%20Saxena",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/PROF.-SATYESH-KUMAR_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "Information about Priyanka Saxena.",
    mapping: "Faculty8",
  },

  {
    name: "Priyanka%20Saxena",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/PROF.-MOHD-RAFI_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    mapping: "Faculty9",
  },
  {
    name: "Priyanka%20Saxena",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-SHIVANI-AGGARWAL_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "Information about Priyanka Saxena.",
    mapping: "Faculty10",
  },
  {
    name: "Priyanka%20Saxena",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-CMA-CS-NIKKHIL-GUPTA_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "Information about Priyanka Saxena.",
    mapping: "Faculty11",
  },
  {
    name: "Priyanka%20Saxena",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-HARPAL-YADAV_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "Information about Priyanka Saxena.",
    mapping: "Faculty12",
  },
  {
    name: "Priyanka%20Saxena",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/PROF.-VINIT-KUMAR_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "Information about Priyanka Saxena.",
    mapping: "Faculty13",
  },
  {
    name: "Priyanka%20Saxena",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/PROF.-MAYAK-AGGARWAL_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "Information about Priyanka Saxena.",
    mapping: "Faculty14",
  },
  {
    name: "Priyanka%20Saxena",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/ACCA-AMARJIT-KAUR_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "Information about Priyanka Saxena.",
    mapping: "Faculty15",
  },
  {
    name: "Priyanka%20Saxena",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-DIVAY-MAGLANI_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "Information about Priyanka Saxena.",
    mapping: "Faculty16",
  },

  {
    name: "Priyanka%20Saxena",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CMA-ABHIMANYYU-AGRRAWAL_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "Information about Priyanka Saxena.",
    mapping: "Faculty17",
  },

  {
    name: "Priyanka%20Saxena",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/PROF.-SANJAY-WELINS_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "Information about Priyanka Saxena.",
    mapping: "Faculty18",
  },
  {
    name: "Priyanka%20Saxena",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/PROF.-VASUDHA-JAIN_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "Information about Priyanka Saxena.",
    mapping: "Faculty19",
  },
];

const Faculty = () => {
  return (
    <React.Fragment>
      <div>
        <FacultyHeader />
        <br />
        <br />
      </div>
      <div className="flex flex-wrap">
        {faculties.map((faculty, index) => (
          <div className="child-box" key={index}>
            <img
              src={faculty.imgUrl}
              alt={faculty.name}
              className="object-fit w-full h-half"
            />
            <div
              className="form-group"
              style={{ marginBottom: "10px", paddingLeft: "10px" }}
            >
              <a
                href={`/faculty/${faculty.name}`}
                className="submit-button"
                style={{
                  paddingLeft: "10px",
                  paddingRight: "15px",
                  border: "none",
                  borderBlockColor: "blue",
                  borderRadius: "5px",
                  marginRight: "5px",
                  color: "white",
                  backgroundColor: "#0984e3",
                  marginLeft: "45px",
                }}
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Faculty;

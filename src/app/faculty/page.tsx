"use client";
import React from "react";
import { Link } from "react-router-dom";
import FacultyHeader from "app/faculty/FacultyHeader";
//import "./Faculty.css";
import "app/globals.css";

export const faculties = [
  {
    name: "Priyanka_Saxena",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-CS-CMA-PRIYANKA-SAXENA-MAM_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty1",
  },
  {
    name: "Santosh_Kumar",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-CMA-SANTOSH-KUMAR_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty2",
  },
  {
    name: "Vishal_Bhattad",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-VISHAL-BHATTAD_PRIYANKA-SAXENA-CLASSES.png",
    info: "",
    mapping: "Faculty3",
  },

  {
    name: "Sumit_Rastogi",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CMA-SUMIT-RASTOGI_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty4",
  },

  {
    name: "Satish_Jalan",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-SATISH-JALAN_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty5",
  },

  {
    name: "Ashutosh_Lata",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-CMA-ASHUTOSH-LATA_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty6",
  },

  {
    name: "Aditya_Jain",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-ADITYA-JAIN_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty7",
  },

  {
    name: "Satyesh_Kumar",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/PROF.-SATYESH-KUMAR_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty8",
  },

  {
    name: "Mohd_Rafi",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/PROF.-MOHD-RAFI_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty9",
  },
  {
    name: "Shivangi_Aggarwal",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-SHIVANI-AGGARWAL_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty10",
  },
  {
    name: "Nikkhil_Gupta",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-CMA-CS-NIKKHIL-GUPTA_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty11",
  },
  {
    name: "Harpal_Yadav",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-HARPAL-YADAV_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty12",
  },
  {
    name: "Vinit_Kumar",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/PROF.-VINIT-KUMAR_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty13",
  },
  {
    name: "Mayank_Agarwal",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/PROF.-MAYAK-AGGARWAL_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty14",
  },
  {
    name: "Amarjit_Kaur",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/ACCA-AMARJIT-KAUR_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty15",
  },
  {
    name: "Divay_Miglani",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CA-DIVAY-MAGLANI_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty16",
  },

  {
    name: "Abhimanyu_Agarrwal",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CMA-ABHIMANYYU-AGRRAWAL_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty17",
  },

  {
    name: "Sanjay_Welkins",
    imgUrl:
      "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/PROF.-SANJAY-WELINS_PRIYANKA-SAXENA-CLASSES-1024x1024.png",
    info: "",
    mapping: "Faculty18",
  },
  {
    name: "Vasudha_Jain",
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
      <div className="flex flex-wrap">
        {faculties.map((faculty, index) => (
          <div className="childbox" key={index}>
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

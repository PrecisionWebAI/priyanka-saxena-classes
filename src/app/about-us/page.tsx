import NavbarComponents from "@/app/about-us/AboutHeader";
//import "./About.css";
import "../globals.css";

import React from "react";
import { FaSun } from "react-icons/fa6";
import { MdOutlineQueryStats } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { IoBulbSharp } from "react-icons/io5";
import Iframe from "react-iframe";
import Image from "next/image";

type Props = {};

const AboutUs = (props: Props) => {
  const imgUrl =
    "https://priyankasaxenaclasses.com/wp-content/uploads/2024/01/CMA-STARS-DEC-2017.jpg";
  const vidUrl = "https://youtu.be/usjSh2kszWc";

  return (
    <div className="flex flex-col items-center">
      {/* Content of the About Us page */}
      <NavbarComponents />
      <br />
      <br />
      <div>
        <div className="Content w-[100%] flex flex-col justify-center items-center ">
          <div className="left-side w-[85%] lg:w-[100%] ">
            <div className="first mb-5">PRIYANKA SHARMA CLASSES</div>
            <div className="main w-[100%]">
              <span>
                At Priyanka Saxena Classes, we believe in redefining the essence
                of education. We understand that success in the corporate world
                requires more than just a professional degree or diploma; it
                necessitates the holistic development of students.
              </span>
              <br />
              <br />
            </div>

            <div className="medium w-[100%]">
              <span>
                Proudly standing as India’s most trusted Coaching institute for
                Cost and Management Accountant (CMA), Priyanka Saxena Classes is
                committed to excellence under the guidance of Dr. CA CS CMA
                Priyanka Saxena, who is a AIR 17.
              </span>
              <br />
              <br />
              <span>
                We are privileged to be a Channel Partner of India’s Leading
                Faculties in India, exclusive for CMA. Our partnerships reflect
                our dedication to providing top-notch education.
              </span>
              <br />
              <br />
            </div>
          </div>

          <div className="right-side">
            <Iframe
              url="https://www.youtube.com/embed/usjSh2kszWc"
              width="500px"
              height="320px"
              id=""
              className="outline-2 p-6"
              display="block"
            />
          </div>
        </div>

        <div className="parent-box">
          <div className="box">OUR FEATURES</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-[100%] flex justify-center align-center">
          <div className="child-box flex gap-3">
            <div className="">
              <FaSun
                style={{
                  fontSize: "36px",
                  marginTop: "40px",
                  marginLeft: "30px",
                }}
              />
            </div>
            <div className="box1 ">
              <strong>Advanced Initiatives</strong>
              <br></br>
              <span>
                Initiative for effective, advanced and personalized coaching in
                an easier and advance manner.
              </span>
            </div>
          </div>
          </div>
          <div className="w-[100%] flex justify-center align-center">
          <div className="child-box flex gap-3">
            <MdOutlineQueryStats
              style={{
                fontSize: "80px",
                marginTop: "20px",
                marginLeft: "20px",
              }}
            />
            <div className="box1 ">
              <strong>Queries</strong>
              <br></br>
              <span>
                Queries instantly solved by our expert. You can post queries
                while playing video.
              </span>
            </div>
          </div>
          </div>
          <div className="w-[100%] flex justify-center align-center">
          <div className="child-box flex gap-3">
            <FaVideo
              style={{
                fontSize: "80px",
                marginTop: "20px",
                marginLeft: "30px",
              }}
            />
            <div className="box1 ">
              <strong>Video Lessons</strong>
              <br></br>
              <span>
                HD-Quality videos lesson accessible in low network zone as well
                with pen drive facility too.
              </span>
            </div>
          </div>
          </div>
          <div className="w-[100%] flex justify-center align-center">
          <div className="child-box flex gap-3">
            <FaBoxArchive
              style={{
                fontSize: "80px",
                marginTop: "20px",
                marginLeft: "30px",
              }}
            />
            <div className="box1 ">
              <strong>Train Your Brain</strong>
              <br></br>
              <span>
                Get updated by regular test series after completion of every
                topic or content.{" "}
              </span>
            </div>
          </div>
          </div>
          <div className="w-[100%] flex justify-center align-center">
          <div className="child-box flex gap-3">
            <FaBookOpen
              style={{
                fontSize: "80px",
                marginTop: "20px",
                marginLeft: "30px",
              }}
            />
            <div className="box1 ">
              <strong>Books</strong>
              <br></br>
              <span>
                Updated books specially with latest amendments from institutes
                and universities.{" "}
              </span>
            </div>
          </div>
          </div>
          <div className="w-[100%] flex justify-center align-center">
          <div className="child-box flex gap-3">
            <IoBulbSharp
              style={{
                fontSize: "80px",
                marginTop: "20px",
                marginLeft: "30px",
              }}
            />
            <div className="box1 ">
              <strong>Suggestions</strong>
              <br></br>
              <span>
                Website is upgraded continuously on the basis of suggestions by
                visitors{" "}
              </span>
            </div>
          </div>
          </div>
          </div>

          <div
            className="relative h-[500px] w-full"
            style={{
              position: "relative",
              width: "100%",
              height: "500px",
              marginTop: "3rem",
              paddingTop: "100px",
            }}
          >
            <Image src={imgUrl} alt="background" fill className="blur-[5px] object-cover" />
            <div
              style={{
                position: "absolute",
                display:"flex",
                flexDirection:"column",
                justifyContent:"start",
                alignItems:"center",
                height:"85%",
                top: 0,
                left: 0,
                zIndex: 1,
                color: "white",
                fontSize: "30px",
                fontWeight: "bold",
                padding: "2rem",
                marginTop: "100px",
                textAlign:"center"
              }}
            >
              Start your studies with 160,000 enrolled students of COC
              Education.
              <br />
            
              <p className="text-center w-[80%]" style={{fontSize: "22px"}}>Experienced Faculties, Daily Doubt sessions, Ready to counsel any
              enquiry, supportive technical team and
              
              empowering staff is which differentiate
              </p>
            </div>
            {/* <div
              className="text-white"
              style={{
                position: "absolute",
                top: 140,
                left: 100,
                zIndex: 1,
                fontSize: "22px",
                fontWeight: "bold",
                padding: "20px",
                textAlign: "center",
                marginTop: "100px",
              }}
            >
              Experienced Faculties, Daily Doubt sessions, Ready to counsel any
              enquiry, supportive technical team and
              <br />
              empowering staff is which differentiate
            </div> */}
          </div>

          <div
            className="box h-[100%] w-[100%] bg-brown"
            style={{ backgroundColor: "#dfe6e9", height: "auto" }}
          >
            <div
              className="class"
              style={{
                fontSize: "30px",
                color: "blue",
                textAlign: "center",
                paddingRight: "40px",
              }}
            >
              NEED ASSISTANCE IN BUYING / ORDERING ? CALL 88 2660 2669
            </div>
            <div
              className="classes"
              style={{
                fontSize: "30px",
                color: "blue",
                marginTop: "2px",
                textAlign: "center",
                paddingRight: "100px",
                paddingLeft: "50px",
              }}
            >
              [Office Timing 10AM to 7PM ]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

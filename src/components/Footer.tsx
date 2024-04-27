"use client";
import React, { useState } from "react";
import { GoMail } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { SiPhonepe } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const imgUrl1 = "/images/logo.webp";

  return (
    <div className="flex flex-col w-full mt-10">
      <div className="flex items-center justify-center bg-accent w-full px-[10px] py-[25px]">
        <div className="flex max-w-7xl w-full mx-auto justify-between items-center px-[30px] flex-wrap">
          <div className="flex flex-col text-white gap-2">
            <span className="text-2xl">Sign up to Newsletter</span>
            <span className="text-sm">
              You will receive every news and recent update on your email!!!
            </span>
          </div>
          <div className="flex flex-wrap">
            <input
              className="w-60 px-[6px] py-[3px] text-base flex bg-white border border-gray-300 outline-none mr-4 h-[42px] box-border"
              id="Name"
              name="Name"
              placeholder="Enter your full name*"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="w-60 px-[6px] py-[3px] text-base flex bg-white border border-gray-300 outline-none h-[42px] box-border"
              id="Email"
              name="Email"
              placeholder="Enter you email address*"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="bg-primary text-white flex justify-center items-center px-4 text-sm h-[42px] rounded-r-[4px]">
              Subscribe
            </div>
          </div>
        </div>
      </div>

      <div
        className="Content h-96 !w-full flex flex-col md:flex-row sm:flex-row"
        style={{ height: "600px" }}
      >
        <div
          className="left-side"
          style={{ flex: "4", backgroundColor: "#ecf0f1" }}
        >
          <div className="child-box">
            <Image
              src={imgUrl1}
              alt="logo"
              className="ml-[15px]"
              width={300}
              height={100}
              sizes="33vw"
            />
          </div>
          <div
            className="first"
            style={{
              fontSize: "14px",
              paddingLeft: "20px",
              marginTop: "20px",
              fontFamily: "sans-serif",
            }}
          >
            <span>COC Education Pvt. Ltd.</span>
            <br></br>
            <br></br>
            <span style={{ fontSize: "14px" }}>
              Office No-132 Ithum Tower-B Sector-62, Noida, Uttar Pradesh
            </span>
          </div>

          <div>
            <div
              className="box2"
              style={{
                marginTop: "30px",
                marginLeft: "15px",
                fontSize: "14px",
                paddingLeft: "6px",
              }}
            >
              <b>For Purchase Related</b>
              <div>Calls/Whatsapp</div>
              <div>8826602669</div>
              <div>Email:supportncare@priyankasaxenaclasses.com</div>
            </div>
          </div>

          <div>
            <div
              className="box2"
              style={{
                marginTop: "30px",
                marginLeft: "15px",
                fontSize: "14px",
                paddingLeft: "6px",
              }}
            >
              <b>For Technical Support</b>
              <div>Calls/Whatsapp : 8826602669</div>
              <div>Email:supportncare@priyankasaxenaclasses.com</div>
            </div>
          </div>

          <div
            className="box2"
            style={{
              marginTop: "30px",
              marginLeft: "15px",
              fontSize: "14px",
              paddingLeft: "6px",
            }}
          >
            <b>For Courier Related Enquiry</b>
            <div>Calls/Whatsapp : 8826602669</div>
            <div style={{ fontSize: "13px" }}>
              Email:supportncare@priyankasaxenaclasses.com
            </div>
          </div>

          <div className="leftside-box flex gap-4">
            <div>
              <GoMail
                style={{
                  fontSize: "36px",
                  marginTop: "25px",
                  marginLeft: "18px",
                }}
              />
            </div>
            <div
              className="box1 "
              style={{ marginTop: "25px", marginLeft: "5px", fontSize: "14px" }}
            >
              <b>Our Contact E-Mail</b>
              <div style={{ fontSize: "12px" }}>
                supportncare@priyankasaxenaclasses.com
              </div>
            </div>
          </div>
        </div>
        <div
          className="right-side"
          style={{ flex: "2", paddingLeft: "60px", backgroundColor: "#ecf0f1" }}
        >
          <div
            className="first"
            style={{
              fontSize: "20px",
              marginTop: "25px",
              fontFamily: "sans-serif",
            }}
          >
            Useful Links
          </div>

          <ul
            className="list angle-double-right list-border"
            style={{ marginTop: "30px" }}
          >
            <li>
              <Link
                className="text-black"
                href="/"
                style={{ textUnderlineOffset: "--", marginLeft: "17px" }}
              >
                Home
              </Link>
              <div
                className="line"
                style={{
                  width: "120px",
                  height: "1px",
                  backgroundColor: "black",
                  margin: " 0 auto",
                  marginTop: "10px",
                  marginLeft: "4px",
                }}
              ></div>
            </li>

            <li style={{ marginTop: "20px" }}>
              <Link
                className="text-black"
                href="about-us"
                style={{
                  textUnderlineOffset: "--",
                  marginLeft: "17px",
                  marginTop: "4px",
                  paddingTop: "5px",
                }}
              >
                About Us
              </Link>

              <div
                className="line"
                style={{
                  width: "120px",

                  height: "1px",
                  backgroundColor: "black",
                  margin: " 0 auto",
                  marginTop: "10px",
                  marginLeft: "5px",
                }}
              ></div>
            </li>

            <li style={{ marginTop: "20px" }}>
              <Link
                className="text-black"
                href="blog"
                style={{
                  textUnderlineOffset: "--",
                  marginLeft: "17px",
                  marginTop: "4px",
                  paddingTop: "5px",
                }}
              >
                Blogs
              </Link>

              <div
                className="line"
                style={{
                  width: "120px",

                  height: "1px",
                  backgroundColor: "black",
                  margin: " 0 auto",
                  marginTop: "10px",
                  marginLeft: "5px",
                }}
              ></div>
            </li>

            <li style={{ marginTop: "20px" }}>
              <Link
                className="text-black"
                href="contact-us"
                style={{
                  textUnderlineOffset: "--",
                  marginLeft: "17px",
                  marginTop: "4px",
                  paddingTop: "5px",
                }}
              >
                Contact Us
              </Link>

              <div
                className="line"
                style={{
                  width: "120px",

                  height: "1px",
                  backgroundColor: "black",
                  margin: " 0 auto",
                  marginTop: "10px",
                  marginLeft: "5px",
                }}
              ></div>
            </li>

            <li style={{ marginTop: "20px" }}>
              <Link
                className="text-black"
                href="face-to-face"
                style={{
                  textUnderlineOffset: "--",
                  marginLeft: "17px",
                  marginTop: "4px",
                  paddingTop: "5px",
                }}
              >
                Face To Face
              </Link>

              <div
                className="line"
                style={{
                  width: "120px",

                  height: "1px",
                  backgroundColor: "black",
                  margin: " 0 auto",
                  marginTop: "10px",
                  marginLeft: "5px",
                }}
              ></div>
            </li>

            <li style={{ marginTop: "20px" }}>
              <Link
                className="text-black"
                href="faculty"
                style={{
                  textUnderlineOffset: "--",
                  marginLeft: "17px",
                  marginTop: "4px",
                  paddingTop: "5px",
                }}
              >
                Faculty
              </Link>

              <div
                className="line"
                style={{
                  width: "120px",

                  height: "1px",
                  backgroundColor: "black",
                  margin: " 0 auto",
                  marginTop: "10px",
                  marginLeft: "5px",
                }}
              ></div>
            </li>

            <li style={{ marginTop: "20px" }}>
              <Link
                className="text-black"
                href="/"
                style={{
                  textUnderlineOffset: "--",
                  marginLeft: "17px",
                  marginTop: "4px",
                  paddingTop: "5px",
                }}
              >
                Video Lectures
              </Link>

              <div
                className="line"
                style={{
                  width: "120px",

                  height: "1px",
                  backgroundColor: "black",
                  margin: " 0 auto",
                  marginTop: "10px",
                  marginLeft: "5px",
                }}
              ></div>
            </li>

            <li style={{ marginTop: "20px" }}>
              <Link
                className="text-black"
                href="/"
                style={{
                  textUnderlineOffset: "--",
                  marginLeft: "17px",
                  marginTop: "4px",
                  paddingTop: "5px",
                }}
              >
                Home
              </Link>

              <div
                className="line"
                style={{
                  width: "120px",

                  height: "1px",
                  backgroundColor: "black",
                  margin: " 0 auto",
                  marginTop: "10px",
                  marginLeft: "5px",
                }}
              ></div>
            </li>
          </ul>
        </div>
        <div
          className="right-side"
          style={{
            flex: "2",
            paddingLeft: "50px",
            backgroundColor: "#ecf0f1",
            marginLeft: "0px",
          }}
        >
          <div
            className="first"
            style={{
              fontSize: "20px",
              marginTop: "25px",
              fontFamily: "sans-serif",
              marginLeft: "0px",
            }}
          >
            Follow Us
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginLeft: "1px", marginRight: "10px" }}>
              <FaFacebook
                style={{
                  fontSize: "30px",
                  marginTop: "25px",
                  paddingLeft: "2px",
                }}
              />
            </div>
            <div style={{ marginLeft: "1px", marginRight: "5px" }}>
              <TfiYoutube
                style={{
                  fontSize: "30px",
                  marginTop: "25px",
                  paddingLeft: "2px",
                }}
              />
            </div>
            <div style={{ marginLeft: "5px" }}>
              <FaTelegram
                style={{
                  fontSize: "30px",
                  marginTop: "25px",
                  paddingLeft: "2px",
                }}
              />
            </div>
            <div style={{ marginLeft: "10px" }}>
              <FaInstagram
                style={{
                  fontSize: "30px",
                  marginTop: "25px",
                  paddingLeft: "2px",
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="right-side"
          style={{ flex: "3", paddingLeft: "60px", backgroundColor: "#ecf0f1" }}
        >
          <div
            className="first"
            style={{
              fontSize: "20px",
              marginTop: "25px",
              fontFamily: "sans-serif",
              marginLeft: "0px",
            }}
          >
            Payments Partner
          </div>

          <div className="icon" style={{ marginTop: "30px" }}>
            <div style={{ marginLeft: "1px", marginRight: "10px" }}>
              <FaCcAmazonPay
                style={{
                  fontSize: "40px",
                  marginTop: "10px",
                  paddingLeft: "2px",
                }}
              />
            </div>
            <div
              className="line"
              style={{
                width: "200px",

                height: "1px",
                backgroundColor: "black",
                margin: " 0 auto",
                marginTop: "15px",
                marginLeft: "1px",
              }}
            ></div>
          </div>
          <div className="icon" style={{ marginTop: "1px" }}>
            <div style={{ marginLeft: "1px", marginRight: "10px" }}>
              <SiPaytm
                style={{
                  fontSize: "60px",
                  marginTop: "2px",
                  paddingLeft: "2px",
                }}
              />
            </div>
            <div
              className="line"
              style={{
                width: "200px",

                height: "1px",
                backgroundColor: "black",
                margin: " 0 auto",
                marginTop: "3px",
                marginLeft: "1px",
              }}
            ></div>
          </div>
          <div className="icon" style={{ marginTop: "1px" }}>
            <div style={{ marginLeft: "1px", marginRight: "10px" }}>
              <FaCcPaypal
                style={{
                  fontSize: "60px",
                  marginTop: "15px",
                  paddingLeft: "2px",
                }}
              />
            </div>
            <div
              className="line"
              style={{
                width: "200px",

                height: "1px",
                backgroundColor: "black",
                margin: " 0 auto",
                marginTop: "10px",
                marginLeft: "1px",
              }}
            ></div>
          </div>
          <div className="icon" style={{ marginTop: "1px" }}>
            <div
              style={{ marginLeft: "1px", marginRight: "10px", color: "red" }}
            >
              <FaGooglePay
                style={{
                  fontSize: "70px",
                  marginTop: "1px",
                  paddingLeft: "2px",
                }}
              />
            </div>
            <div
              className="line"
              style={{
                width: "200px",

                height: "1px",
                backgroundColor: "black",
                margin: " 0 auto",
                marginTop: "1px",
                marginLeft: "1px",
              }}
            ></div>
          </div>
          <div className="icon" style={{ marginTop: "1px" }}>
            <div
              style={{ marginLeft: "1px", marginRight: "10px", color: "blue" }}
            >
              <SiPhonepe
                style={{
                  fontSize: "60px",
                  marginTop: "15px",
                  paddingLeft: "2px",
                }}
              />
            </div>
            <div
              className="line"
              style={{
                width: "200px",

                height: "1px",
                backgroundColor: "black",
                margin: " 0 auto",
                marginTop: "15px",
                marginLeft: "1px",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <div
            className="flex items-center justify-between md:justify-start"
            style={{ fontSize: "10px" }}
          >
            <Link href="/" className="text-white text-2xl font-bold"></Link>
            <span className="text-white" style={{ paddingLeft: "1rem" }}>
              &nbsp;&nbsp;Copyright ©2017 COC Education Pvt. Ltd. All Rights
              Reserved
            </span>
            <div className="md:space-x-4 flex flex-wrap">
              <Link
                href="/about"
                className="text-white text-sm md:text-base"
                style={{ paddingLeft: "45rem" }}
              >
                FAQ
              </Link>
              <Link
                href="/services"
                className="text-white text-sm md:text-base"
                style={{ paddingLeft: "0.75rem" }}
              >
                Help
              </Link>
              <Link
                href="/services"
                className="text-white text-sm md:text-base"
                style={{ paddingLeft: "0.75rem" }}
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

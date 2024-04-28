import NavbarComponent from "@/app/contact-us/ContactHeader";
import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { GoMail } from "react-icons/go";

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <NavbarComponent />
      <div
        className="Content mx-auto"
        style={{
          height: "800px",
          width: "1100px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          className="left-side"
          style={{
            flex: "1",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            marginLeft: "30px",
          }}
        >
          <div
            className="leftside-box flex gap-3"
            style={{
              border: "2px",
              marginBottom: "15px",
              backgroundColor: "#dfe6e9",
              height: "150px",
            }}
          >
            <div>
              <TfiLocationPin
                style={{
                  fontSize: "36px",
                  marginTop: "25px",
                  marginLeft: "30px",
                }}
              />
            </div>
            <div
              className="box1 "
              style={{
                marginTop: "25px",
                marginLeft: "5px",
                fontSize: "13px",
              }}
            >
              <b>Our Office Location</b>
              <div>
                1/44, 1st Floor, near Lalita Park, Gurudwara, Lalita Park, Laxmi
                Nagar, New Delhi, Delhi, 110092
              </div>
            </div>
          </div>
          <div
            className="leftside-box"
            style={{
              border: "2px",
              marginBottom: "15px",
              backgroundColor: "#dfe6e9",
              height: "150px",
            }}
          >
            <div
              className="box2"
              style={{
                marginTop: "30px",
                marginLeft: "15px",
                fontSize: "14px",
                paddingLeft: "2px",
              }}
            >
              <b>For Purchase Related</b>
              <div>Calls/Whatsapp</div>
              <div>8826602669</div>
              <div>Email:supportncare@priyankasaxenaclasses.com</div>
            </div>
          </div>

          <div
            className="leftside-box flex gap-4 "
            style={{
              border: "2px",
              marginBottom: "15px",
              backgroundColor: "#dfe6e9",
              height: "150px",
            }}
          >
            <div
              className="box2"
              style={{
                marginTop: "30px",
                marginLeft: "15px",
                fontSize: "15px",
                paddingLeft: "2px",
              }}
            >
              <b>For Technical Support</b>
              <div>Calls/Whatsapp : 8826602669</div>
              <div>Email:supportncare@priyankasaxenaclasses.com</div>
            </div>
          </div>

          <div
            className="leftside-box flex "
            style={{
              border: "2px",
              marginBottom: "15px",
              backgroundColor: "#dfe6e9",
              height: "150px",
            }}
          >
            <div
              className="box2"
              style={{
                marginTop: "30px",
                marginLeft: "15px",
                fontSize: "15px",
                paddingLeft: "2px",
              }}
            >
              <b>For Courier Related Enquiry</b>
              <div>Calls/Whatsapp : 8826602669</div>
              <div style={{ fontSize: "13px" }}>
                Email:supportncare@priyankasaxenaclasses.com
              </div>
            </div>
          </div>

          <div
            className="leftside-box flex gap-4"
            style={{
              border: "2px",
              marginBottom: "15px",
              backgroundColor: "#dfe6e9",
              height: "150px",
            }}
          >
            <div>
              <GoMail
                style={{
                  fontSize: "36px",
                  marginTop: "25px",
                  marginLeft: "30px",
                }}
              />
            </div>
            <div
              className="box1 "
              style={{
                marginTop: "25px",
                marginLeft: "5px",
                fontSize: "14px",
              }}
            >
              <b>Our Contact E-Mail</b>
              <div style={{ fontSize: "12px" }}>
                supportncare@priyankasaxenaclasses.com
              </div>
            </div>
          </div>
        </div>
        <div className="right-side" style={{ flex: "2", paddingLeft: "60px" }}>
          <div className="interested" style={{ fontSize: "30px" }}>
            <h1>
              <u>Intersted</u> In Discussing ?
            </h1>
          </div>
          <br></br>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            ducimus obcaecati necessitatibus ex, ut iure repudiandae fuga quam
            nostrum hic ea. Placeat ipsum iste pariatur distinctio. Autem
            maiores beatae architecto.
          </span>
          <div>
            <br></br>
            <input
              className="form-control"
              style={{
                height: "36px",
                width: "500px",
                padding: "4px 6px",
                fontSize: "13px",
                lineHeight: "1",
                borderRadius: "0",
                boxShadow: "none",
                display: "block",
                backgroundColor: "white",
                border: "1px solid #ccc",
                marginBlockStart: "12px",
              }}
              id="Name"
              name="Name"
              placeholder="Enter Name"
              type="text"
            />
            <input
              className="form-control"
              style={{
                height: "36px",
                width: "500px",
                padding: "4px 6px",
                fontSize: "13px",
                lineHeight: "1",
                borderRadius: "0",
                boxShadow: "none",
                display: "block",
                backgroundColor: "white",
                border: "1px solid #ccc",
                marginBlockStart: "12px",
              }}
              id="Name"
              name="Name"
              placeholder="Enter Email Id"
              type="text"
            />
            <input
              className="form-control"
              style={{
                height: "36px",
                width: "500px",
                padding: "4px 6px",
                fontSize: "13px",
                lineHeight: "1",
                borderRadius: "0",
                boxShadow: "none",
                display: "block",
                backgroundColor: "white",
                border: "1px solid #ccc",
                marginBlockStart: "12px",
              }}
              id="Name"
              name="Name"
              placeholder="Enter Contact No"
              type="text"
            />
            <input
              className="form-control"
              style={{
                height: "36px",
                width: "500px",
                padding: "4px 6px",
                fontSize: "13px",
                lineHeight: "1",
                borderRadius: "0",
                boxShadow: "none",
                display: "block",
                backgroundColor: "white",
                border: "1px solid #ccc",
                marginBlockStart: "12px",
              }}
              id="Name"
              name="Name"
              placeholder="Enter Message"
              type="text"
            />
          </div>{" "}
          <br></br>
          <div
            className="form-group"
            style={{
              marginBottom: "12px",
              boxSizing: "border-box",
              paddingLeft: "10px",
            }}
          >
            <button
              type="submit"
              data-loading-text="Please wait..."
              className="submit-button"
              style={{
                backgroundColor: "#6c5ce7",
                color: "white",
                padding: "10px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Submit{" "}
            </button>
            <button
              type="reset"
              data-loading-text="Please wait..."
              className="reset-button"
              style={{
                backgroundColor: "#6c5ce7",
                color: "white",
                padding: "10px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Reset{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

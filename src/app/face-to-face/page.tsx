import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div
      className="box h-250 w-1360 bg-brown"
      style={{ backgroundColor: "#dfe6e9", height: "230px" }}
    >
      <div
        className="class text-3xl font-bold text-black mt-20 ml-10 pl-60 pt-50"
        style={{
          fontSize: "40px",
          color: "black",
          fontWeight: "bold",
          marginTop: "20px",
          marginLeft: "20px",
          paddingLeft: "60px",
          paddingTop: "70px",
        }}
      >
        DEMO CLASSES
      </div>
      <br></br>
      <div
        className="box h-250 w-1360 bg-brown"
        style={{
          backgroundColor: "yellow",
          height: "400px",
          marginTop: "100px",
        }}
      >
        <div
          className="class text-3xl font-bold text-black mt-20 ml-10 pl-60 pt-50"
          style={{
            fontSize: "44px",
            color: "blue",
            fontWeight: "bold",
            marginTop: "20px",
            paddingTop: "120px",
            textAlign: "center",
            paddingRight: "100px",
            paddingLeft: "50px",
          }}
        >
          Keep Updated About CMA Industry
        </div>
        <div
          className="class text-3xl font-bold text-black mt-20 ml-10 pl-60 pt-50"
          style={{
            fontSize: "20px",
            color: "blue",
            marginTop: "30px",
            textAlign: "center",
            paddingRight: "100px",
            paddingLeft: "50px",
          }}
        >
          Make yourself Industry ready with updated content about law, taxes,
          business case studies, etc.
        </div>

        <div className="flex justify-center items-center">
          <input
            className="form-control h-36 w-250 text-base leading-none rounded-none shadow-none block bg-white border border-gray-300 pl-10 pr-16"
            style={{
              height: "50px",
              marginTop: "20px",
              width: "250px",
              paddingLeft: "10px",
            }}
            id="Name"
            name="Name"
            placeholder="sample@mail.com"
            type="text"
            value=""
          />
          <button
            type="submit"
            className="submit-button"
            style={{
              backgroundColor: "blue",
              height: "50px",
              marginTop: "20px",
              width: "120px",
              color: "white",
              fontSize: "15px",
            }}
          >
            Subscribe{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Page;

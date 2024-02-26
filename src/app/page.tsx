import Home from "components/Home";
import StaticNavbar from "components/StaticNavbar";
import StickyNavbar from "components/StickyNavbar";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="bg-white min-h-screen flex flex-col overflow-auto">
      <StaticNavbar />
      <StickyNavbar />
      <Home />
    </div>
  );
};

export default page;

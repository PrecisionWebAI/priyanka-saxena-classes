import React from "react";
import Banner from "./Banner";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex flex-col w-full">
      <Banner />
      <div className="bg-accent text-white text-4xl font-bold flex w-full justify-center py-5">
        Face to Face New Batch Started at Laxmi Nagar
      </div>
    </div>
  );
};

export default Home;

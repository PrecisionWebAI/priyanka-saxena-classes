import React from "react";
import allData from "@/data/new-video-courses.json";
import VideoCoursesHeaderDetails from "./VideoCoursesDetailsHeader";
import Catalog from "@/components/Catalog";

const data: any = [allData[0]];

allData.forEach((ad) => {
  if (!!!data.find((d: { id: string }) => d?.id === ad.id)) data.push(ad);
});

const Page = () => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <VideoCoursesHeaderDetails />
      <div className="flex w-full max-w-7xl mx-auto">
        <Catalog title="courses" data={data} />
      </div>
    </div>
  );
};

export default Page;

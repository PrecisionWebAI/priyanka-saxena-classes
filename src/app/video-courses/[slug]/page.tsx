import React from "react";
import allData from "@/data/new-video-courses.json";
import VideoCoursesHeaderDetails from "../VideoCoursesDetailsHeader";
import Catalog from "@/components/Catalog";
import { ParentCategoryEnumType } from "../types/video-courses";

type Props = {
  params: {
    slug: ParentCategoryEnumType;
  };
};

const Page = ({ params: { slug } }: Props) => {
  const data: any = [];

  allData.forEach((ad) => {
    if (
      !!!data.find((d: { id: string; type: string }) => d?.id === ad.id) &&
      ad.type === slug
    )
      data.push(ad);
  });

  return (
    <div className="flex flex-col gap-10 w-full">
      <VideoCoursesHeaderDetails />
      <div className="flex w-full max-w-7xl mx-auto">
        <Catalog title={slug} data={data} />
      </div>
    </div>
  );
};

export default Page;

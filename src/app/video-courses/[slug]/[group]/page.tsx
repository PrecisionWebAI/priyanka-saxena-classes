"use client";
import React from "react";
import allData from "@/data/new-video-courses.json";
import {
  CourseDataType,
  ParentCategoryEnumType,
  ProductVariantType,
} from "../../types/video-courses";

import { usePathname } from "next/navigation";
import ProductPage from "@/components/ProductPage";
import VideoCoursesHeaderDetails from "../../VideoCoursesDetailsHeader";
import Catalog from "@/components/Catalog";

type Props = {
  params: {
    group: string;
  };
};

const getData = (
  arr: Array<ParentCategoryEnumType>,
  allData: Record<any, any>
) => {
  let data: Array<any> = [];

  arr.forEach((a) => {
    let d = allData.filter(
      (ad: { type: string; group: string }) =>
        ad?.type.includes(a) || (ad?.group && ad?.group.includes(a))
    );
    data = d;
  });

  return data;
};

const Page = ({ params: { group } }: Props) => {
  const pathName = usePathname();
  const parents: Array<any> = pathName
    .split("/")
    .filter((p) => p !== "video-courses" && p !== group && !!p);
  const parentData: Array<CourseDataType> = getData(parents, allData);
  const isCatalogueType =
    parents.includes("inter") || parents.includes("final");

  const allVariants: Array<CourseDataType> = parentData.filter((pd) =>
    isCatalogueType
      ? pd.group?.toLowerCase().split(" ").join("-") === group
      : pd.id === group
  );

  let data: ProductVariantType | any;

  if (isCatalogueType)
    allData.forEach((ad) => {
      if (
        data &&
        !!!data.find(
          (d: { id: string; type: ParentCategoryEnumType }) => d?.id === ad.id
        ) &&
        ad.type.includes(parents[0]) &&
        ad?.group?.toLowerCase().split(" ").join("-") === group
      )
        data.push(ad);
      else if (
        !data &&
        ad.type.includes(parents[0]) &&
        ad?.group?.toLowerCase().split(" ").join("-") === group
      ) {
        data = [];
        data.push(ad);
      }
    });
  else
    data = allVariants.reduce((acc: any, curr: CourseDataType) => {
      let obj = {
        ...curr,
        mode: acc?.mode
          ? [...Array.from(new Set(acc?.mode).add(curr?.mode))]
          : [curr.mode],
        attempt: acc?.attempt
          ? [...Array.from(new Set(acc?.attempt).add(curr?.attempt))]
          : [curr.attempt],
      };
      return obj;
    }, {});

  return (
    data &&
    (isCatalogueType ? (
      <div className="flex flex-col gap-10 w-full">
        <VideoCoursesHeaderDetails />
        <div className="flex w-full max-w-7xl mx-auto">
          <Catalog title={parents[0]} data={data} />
        </div>
      </div>
    ) : (
      <ProductPage data={data} allVariants={allVariants} />
    ))
  );
};

export default Page;

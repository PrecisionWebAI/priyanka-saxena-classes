"use client";
import React from "react";
import allData from "@/data/new-video-courses.json";
import {
  CourseDataType,
  ProductVariantType,
} from "../../../types/video-courses";

import { usePathname } from "next/navigation";
import ProductPage from "@/components/ProductPage";

type Props = {
  params: {
    id: string;
  };
};

const getData = (arr: Array<string>, allData: Record<any, any>) => {
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

const Page = ({ params: { id } }: Props) => {
  const pathName = usePathname();
  const parents = pathName
    .split("/")
    .filter((p) => p !== "video-courses" && p !== id && !!p)
    .map((p) => p.replaceAll("%20", " "));
  const parentData: Array<CourseDataType> = getData(parents, allData);
  const allVariants: Array<CourseDataType> = parentData.filter(
    (pd) => pd.id === id
  );

  const data: ProductVariantType = allVariants.reduce(
    (acc: any, curr: CourseDataType) => {
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
    },
    {}
  );

  return data && <ProductPage data={data} allVariants={allVariants} />;
};

export default Page;

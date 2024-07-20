import {
  CourseDataType,
  ParentCategoryEnumType,
} from "@/app/video-courses/types/video-courses";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CatalogPropsType = {
  title: ParentCategoryEnumType;
  data: Array<CourseDataType>;
};

const Catalog = ({ title, data }: CatalogPropsType) => {
  const getUrl = (image: boolean, product: CourseDataType) => {
    const groupLink = product?.group ? `/${product?.group}` : "";

    if (image)
      return `/images/courses/${product?.type}${groupLink}${product?.imgUrl}`;
    else return `/video-courses/${product?.type}${groupLink}/${product?.id}`;
  };

  return (
    <div className="flex w-full flex-col">
      {/* <div>Header Component</div> */}
      <div className="flex w-full max-w-7xl flex-col gap-10">
        <div className="flex flex-col gap-2">
          <span className="capitalize flex text-2xl ml-5 md:ml-0">{title}</span>
          <span className="h-[2px] w-10 bg-accent ml-5 md:ml-0" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5 gap-10 ">
          {data.map((d) => (
            <Link
              href={getUrl(false, d)}
              key={d.id}
              className="flex flex-col w-full shadow-md hover:shadow-primary hover:shadow-lg"
            >
              <div className="flex w-full h-0 pb-[100%] box-border relative">
                <Image src={getUrl(true, d)} alt={d.title} fill />
              </div>
              <div className="bg-primary flex justify-center items-center text-white py-2 font-semibold">
                {d["title-price"]}
              </div>
              <div className="flex flex-col p-5 gap-4">
                <span className="text-lg font-bold">{d.title}</span>
                <span className="flex gap-2 text-sm">
                  By
                  <Link className="text-sky-500" href={d.byUrl}>
                    {d.by}
                  </Link>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;

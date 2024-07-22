"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import faculties from "@/data/faculty.json";
import { useMemo } from "react";

type Faculty = {
  name: string;
  imgUrl: string;
  info: string;
  mapping: string;
};

export default function Page({}) {
  const { faculty_name } = useParams<{ faculty_name: string }>();

  const faculty: Faculty | undefined = useMemo(() => {
    const faculty = faculties.find((faculty) => faculty.name == faculty_name);
    if (faculty)
      faculty.info =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
    return faculty;
  }, [faculty_name]);

  return (
    faculty && (
      <div className="flex  flex-col lg:flex-row mt-10 max-w-7xl w-full mx-auto gap-4">
        <div className="relative flex flex-1 ">
          <div className="flex w-full h-0 pb-[100%]">
            <Image
              src={faculty.imgUrl}
              alt={faculty.name}
              loading="lazy"
              fill
              sizes="33vw"
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col mt-4 gap-2 flex-[3] p-4 lg:p-0">
          <h3 className="text-2xl lg:text-3xl font-bold">
            {faculty.name.replaceAll("-", " ")}
          </h3>
          <span className="text-accent " >Priyanka Classes</span>
          <p className="text-justify lg:text-start">{faculty.info}</p>
        </div>
      </div>
    )
  );
}

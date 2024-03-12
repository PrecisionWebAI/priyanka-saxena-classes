"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import faculties from "../faculty.json";
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
      <div className="flex mt-10 max-w-7xl mx-auto gap-4">
        {/* <div className="relative w-[1000px] object-contain"> */}
        <Image
          src={faculty.imgUrl}
          alt={faculty.name}
          width={400}
          height={50}
          loading="lazy"
          // fill
          sizes="33vw"
        />
        {/* </div> */}
        <div className="flex flex-col mt-4 gap-2">
          <h3 className="text-3xl font-bold">
            {faculty.name.replace("-", " ")}
          </h3>
          <span className="text-accent">Priyanka Classes</span>
          <p>{faculty.info}</p>
        </div>
      </div>
    )
  );
}

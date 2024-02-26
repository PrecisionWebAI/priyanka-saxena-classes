"use client";
import { faculties } from "../page";
import Image from "next/image";

interface Faculty {
  name: string;
  imgUrl: string;
  info: string;
  mapping: string;
}

export default function Page({ params }: { params: { faculty_name: string } }) {
  const faculty = faculties.filter(
    (faculty) => faculty.name == params.faculty_name
  );

  return (
    <div>
      <h3>{faculty[0].name}</h3>
      <Image
        src={faculty[0].imgUrl}
        alt={faculty[0].name}
        width={40}
        height={50}
      />
      <p>{faculty[0].info}</p>
    </div>
  );
}

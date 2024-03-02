"use client";
import { useParams } from "next/navigation";
import { faculties } from "../page";
import Image from "next/image";

type Faculty = {
  name: string;
  imgUrl: string;
  info: string;
  mapping: string;
};

export default function Page({}) {
  const { faculty_name } = useParams<{ faculty_name: string }>();
  const faculty = faculties.find((faculty) => faculty.name == faculty_name);
  console.log(faculty_name);

  return (
    faculty && (
      <div>
        <h3
          style={{
            marginTop: "30px",
            fontSize: "30px",
            marginLeft: "20px",
            fontWeight: "bold",
          }}
        >
          {faculty?.name.replace("-", " ")}
        </h3>
        <Image
          src={faculty?.imgUrl}
          alt={faculty?.name}
          width={400}
          height={50}
        />
        <p style={{ marginLeft: "20px" }}>{faculty?.info}</p>
      </div>
    )
  );
}

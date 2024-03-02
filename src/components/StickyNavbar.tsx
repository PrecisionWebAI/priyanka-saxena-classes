"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

const headers = [
  {
    name: "Home",
    key: "/",
  },
  {
    name: "Faculties",
    key: "faculty",
  },
  {
    name: "Blogs",
    key: "blog",
  },
  {
    name: "About Us",
    key: "about-us",
  },
  {
    name: "Contact Us",
    key: "contact-us",
  },
  {
    name: "Face To Face",
    key: "face-to-face",
  },
];

const StickyNavbar = (props: Props) => {
  const [active, setActive] = useState(headers[0].key);

  const { push } = useRouter();

  useEffect(() => {
    push(active);
  }, [active, push]);

  return (
    <div className="bg-primary flex min-h-10 sticky top-0 justify-center items-center px-[10%] gap-5">
      {headers.map((h) => (
        <span
          className={
            "flex hover:bg-white hover:text-black transition-all duration-300 px-2 py-1 rounded-md cursor-pointer" +
            `${active === h.key ? " bg-white text-black" : " text-white"}`
          }
          key={h.key}
          onClick={() => setActive(h.key)}
        >
          {h.name}
        </span>
      ))}
    </div>
  );
};

export default StickyNavbar;

"use client";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

type Props = {};

const headers = [
  {
    name: "Home",
    key: "/",
  },  {
    name: "About Us",
    key: "/about-us",
  },  {
    name: "Video Courses",
    key: "/video-courses",
  },
  {
    name: "Face To Face",
    key: "/face-to-face",
  },
  {
    name: "Faculty",
    key: "/faculty",
  },
  {
    name: "Blog",
    key: "/blog",
  },

  {
    name: "Contact Us",
    key: "/contact-us",
  },

];

const StickyNavbar = (props: Props) => {
  const { push } = useRouter();
  const pathname = usePathname();

  // useEffect(() => {
  //   console.log("PATH", pathname);
  //   push(pathname === "/" ? active : pathname);
  // }, [pathname, push]);

  return (
    <div className="bg-primary flex min-h-10 sticky top-0 justify-center items-center px-[10%] gap-5">
      {headers.map((h) => (
        <span
          className={
            "flex hover:bg-white hover:text-black transition-all duration-300 px-2 py-1 rounded-md cursor-pointer" +
            `${pathname === h.key ? " bg-white text-black" : " text-white"}`
          }
          key={h.key}
          onClick={() => push(h.key)}
        >
          {h.name}
        </span>
      ))}
    </div>
  );
};

export default StickyNavbar;

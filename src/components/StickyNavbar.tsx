"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";

type Props = {};

const headers = [
  {
    name: "Home",
    key: "/",
  },
  {
    name: "About Us",
    key: "/about-us",
  },
  {
    name: "Video Courses",
    key: "/video-courses",
    dropDown: [
      {
        name: "Foundation",
        key: "/video-courses/foundation",
      },
      {
        name: "Renewals",
        key: "/video-courses/renewals",
      },
    ],
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

type HeaderRequiredFieds = {
  name: string;
  key: string;
};

type DropDownHeaderType = HeaderRequiredFieds & {
  dropDown?: Array<HeaderRequiredFieds>;
};

type DropDownProptypes = {
  h: DropDownHeaderType;
};

const DropDown = ({ h }: DropDownProptypes) => {
  const [dropdownOpen, setDropdownOpen] = useState("");

  const { push } = useRouter();
  const pathname = usePathname();

  return (
    <span
      className={
        "flex hover:bg-white hover:text-black transition-all duration-300 px-2 py-1 rounded-md cursor-pointer box-border" +
        `${
          h.dropDown && h?.dropDown.length > 0
            ? pathname === h.key || pathname?.includes(h.key)
              ? " bg-white text-black"
              : " text-white"
            : pathname === h.key
            ? " bg-white text-black"
            : " text-white"
        }`
      }
      key={h.key}
      onClick={() => !(h.dropDown && h?.dropDown.length > 0) && push(h.key)}
      onMouseEnter={() => h.dropDown && setDropdownOpen(h?.name)}
      onMouseLeave={() => setDropdownOpen("")}
    >
      <div className="relative flex w-full box-border">
        {h.dropDown && h.dropDown.length > 0 ? (
          <>
            <div className="flex gap-2 items-center z-[9999]">
              {h.name} <FaCaretDown />
            </div>
            <div
              className={
                "flex flex-col w-[112%] transition-all duration-300 bg-white absolute z-[9999] overflow-hidden top-[30px] shadow-md box-border -left-2 rounded-[4px]" +
                (dropdownOpen === h.name ? " h-[300%]" : " h-0")
              }
            >
              {h.dropDown.map((d) => (
                <Link key={d.key} href={d.key}>
                  <span className="flex w-full box-border">
                    <DropDown h={d} />
                  </span>
                </Link>
              ))}
            </div>
          </>
        ) : (
          h.name
        )}
      </div>
    </span>
  );
};

const StickyNavbar = (props: Props) => {
  return (
    <nav className="bg-primary flex min-h-10 sticky top-0 justify-center items-center px-[10%] gap-5">
      {headers.map((h) => (
        <DropDown h={h} key={h.key} />
      ))}
    </nav>
  );
};

export default StickyNavbar;

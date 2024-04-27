"use client";
import { useState, useEffect, useRef } from "react";

import Link from "next/link";
import Dropdown from "./DropDown";
import { usePathname } from "next/navigation";

type ItemType = {
  url: string;
  title: string;
};

type MenuItemsPropsType = {
  items: ItemType & {
    submenu?: Array<ItemType>;
  };
  depthLevel: number;
};

const MenuItems = ({ items, depthLevel }: MenuItemsPropsType) => {
  const [dropdown, setDropdown] = useState(false);

  let ref: any = useRef();

  const pathname = usePathname();

  useEffect(() => {
    const handler = (event: { target: any }) => {
      if (dropdown && ref?.current && !ref?.current?.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li
      className={
        "menu-items transition-colors duration-300 m-[2px]" +
        `${
          depthLevel > 0
            ? " text-black"
            : items?.submenu && items?.submenu?.length > 0
            ? pathname === items.url || pathname?.includes(items.url)
              ? " bg-[#f2f2f2]"
              : " text-[#f2f2f2]"
            : pathname === items.url
            ? " bg-[#f2f2f2] text-black"
            : " text-[#f2f2f2]"
        }` +
        `${dropdown ? " bg-[#f2f2f2] text-black" : ""}`
      }
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {window && window.innerWidth < 960 && depthLevel === 0 ? (
              items.title
            ) : (
              <Link href={items.url}>{items.title}</Link>
            )}

            {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel >
                0 && window.innerWidth > 960 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link href={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;

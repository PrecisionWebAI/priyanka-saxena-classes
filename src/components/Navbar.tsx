import React from "react";
import MenuItems from "./MenuItems";
import { menuItems } from "@/utils/menuItems";

const Navbar = () => {
  return (
    <nav className="z-[9999] sticky top-0 shadow-md border-b border-accent">
      <ul className="menus bg-primary justify-center items-center gap-5">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

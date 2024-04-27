import React from "react";
import MenuItems from "./MenuItems";

type DropDownPropsType = {
  submenus: any;
  dropdown: boolean;
  depthLevel: number;
};

const Dropdown = ({ submenus, dropdown, depthLevel }: DropDownPropsType) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu: any, index: React.Key | null | undefined) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;

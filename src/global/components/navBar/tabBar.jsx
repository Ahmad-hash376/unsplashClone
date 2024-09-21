import React, { useState } from "react";
import "./NavBar.scss";
import { Tab } from "./navBarStyle";

const TabBar = () => {
  const tempData = ["Wallpaper", "3D Renders", "Travel", "Nature"];
  const [isSelected, setIsSelected] = useState("Editorial");

  return (
    <div className="tabBar">
      <Tab
        onClick={() => setIsSelected("Editorial")}
        isSelected={isSelected.toLowerCase().match("Editorial".toLowerCase())}
      >
        Editorial
      </Tab>
      <Tab
        onClick={() => setIsSelected("Following")}
        isSelected={isSelected.toLowerCase().match("Following".toLowerCase())}
      >
        Following
      </Tab>
      <hr />
      {tempData.map((item, index) => {
        return (
          <Tab
            key={index}
            onClick={() => setIsSelected(item)}
            isSelected={isSelected.toLowerCase().match(item.toLowerCase())}
          >
            {item}
          </Tab>
        );
      })}
    </div>
  );
};

export default TabBar;

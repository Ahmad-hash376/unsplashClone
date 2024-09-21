import React from "react";
import "./NavBar.scss";
import { IoSearch } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="navBar">
      <img src={require("../../../assets/images/Unsplash_Symbol.png")} alt="" />
      <form>
        <IoSearch />
        <input type="text" placeholder="Search Photos and illustrations" required />
      </form>
      <span>Advertise</span>
      <span>Blog</span>
      <span>Unsplash</span>
      <span>Unsplash</span>
      <span>Unsplash</span>
    </div>
  );
};

export default NavBar;

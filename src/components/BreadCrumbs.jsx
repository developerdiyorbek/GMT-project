import React from "react";
import { Link, useLocation } from "react-router-dom";

//icons
import { MdKeyboardArrowRight } from "react-icons/md";

const BreadCrumbs = () => {
  const location = useLocation();

  const currentLink = [];
  const crumbs = location.pathname
    .split("/")
    .filter((crum) => crum != "")
    .map((crum) => {
      currentLink.push(`/${crum}`);
      return (
        <div className="crumb" key={crum}>
          <Link to={currentLink.join("")}>{crum}</Link>
        </div>
      );
    });

  return (
    <div className="my-5 breadcrumbs text-black flex items-center">
      <Link to={"/"}>home</Link>
      <span>{">"}</span>
      {crumbs}
    </div>
  );
};

export default BreadCrumbs;

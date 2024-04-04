import React from "react";
import { useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();

  const crumbs = location.pathname.split("");

  return <div className="my-5">BreadCrumbs</div>;
};

export default BreadCrumbs;

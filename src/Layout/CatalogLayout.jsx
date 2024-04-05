import React from "react";
import { Outlet } from "react-router-dom";

const CatalogLayout = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default CatalogLayout;

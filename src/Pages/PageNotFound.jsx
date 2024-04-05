import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center flex-col">
      <h4 className="text-4xl mb-2 md:text-7xl text-yellow-600">
        PageNotFound
      </h4>
      <Link
        to={"/"}
        className="text-xl md:text-2xl  mt-3 bg-[#088269] p-2 md:p-4 rounded-[50px] text-white hover:opacity-75 duration-150"
      >
        Go to home
      </Link>
    </div>
  );
};

export default PageNotFound;

import { Link } from "react-router-dom";

import SearchComp from "./SearchComp";

import Logo from "../assets/Logo.svg";

// icons
import { RiCloseFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiPhone } from "react-icons/fi";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import HamburgerModal from "./HamburgerModal";

const HeaderForPhone = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="block px-4 py-3 md:hidden">
        <div className="mb-4 flex items-center justify-between">
          <Link to="/">
            <LazyLoadImage src={Logo} alt="Logo" width={74} height={32} />
          </Link>
          <div className="flex items-center gap-5">
            <Link to="tel: +7(495)000-00-00">
              <FiPhone size={23} />
            </Link>
            <button onClick={() => setOpenMenu((prev) => !prev)}>
              {!openMenu ? (
                <RxHamburgerMenu size={23} />
              ) : (
                <RiCloseFill size={23} />
              )}
            </button>
          </div>
        </div>
        <div className="w-full max-w-[450px]">
          <SearchComp />
        </div>
      </div>

      <HamburgerModal openMenu={openMenu} />
    </>
  );
};

export default HeaderForPhone;

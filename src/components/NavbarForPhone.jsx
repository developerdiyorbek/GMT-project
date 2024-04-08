import { NavLink } from "react-router-dom";

// icons
import { BiHomeAlt } from "react-icons/bi";
import { RiMenuSearchLine } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

// compoents
import LoginModal from "./LoginModal";

// hooks
import { useEffect, useState } from "react";

// navbar array
const navbarLinksPhone = [
  {
    id: 1,
    icon: (
      <>
        <BiHomeAlt size={20} />
      </>
    ),
    title: "Главная",
    to: "/",
  },
  {
    id: 2,
    icon: <RiMenuSearchLine size={20} />,
    title: "Каталог",
    to: "catalog",
  },
  {
    id: 3,
    icon: <BsCart2 size={20} />,
    title: "Корзина",
    to: "korzina",
  },
  {
    id: 4,
    icon: <FaRegHeart size={20} />,
    title: "Избранное",
    to: "favorite",
  },
];

const NavbarForPhone = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("UserInformation");
    setUserData(data);
  }, [localStorage.getItem("UserInformation")]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <nav className="fixed bottom-0 left-0 z-10 block w-full bg-[#F8F7F3] py-2 md:hidden">
        <div className="mx-auto flex items-center justify-between  gap-1 px-3">
          {navbarLinksPhone.map((link) => (
            <NavLink
              to={link.to}
              key={link.id}
              className="group flex flex-col items-center gap-1"
            >
              <span className="group-hover:text-[#07745E]">{link.icon}</span>
              <span className="text-[#7A7687] group-hover:text-[#07745E]">
                {link.title}
              </span>
            </NavLink>
          ))}
          <button
            className={`group  flex-col items-center gap-1 ${
              userData ? " hidden" : " flex"
            }`}
            onClick={() => setIsOpenModal(true)}
          >
            <span className="group-hover:text-[#07745E]">
              <FaRegUser size={20} />
            </span>
            <span className="text-[#7A7687] group-hover:text-[#07745E]">
              Войти
            </span>
          </button>
        </div>
      </nav>
      <LoginModal isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
    </>
  );
};

export default NavbarForPhone;

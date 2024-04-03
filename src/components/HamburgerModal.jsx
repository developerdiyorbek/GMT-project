import { IoLocationOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const HamburgerModal = ({ openMenu }) => {
  return (
    <div
      className={`${
        openMenu ? "block" : "hidden"
      } fixed left-0 top-[50px] z-10 h-screen w-screen bg-white`}
    >
      <div className="bg-[#E5E4ED]">
        <div className="flex items-center justify-between px-4 py-4">
          <address className="flex items-center gap-1 not-italic">
            <IoLocationOutline size={23} />
            <p className="font-semibold text-[#202020]">Москва</p>
          </address>
          <p className="text-[12px] font-semibold text-[#7A7687]">Изменить</p>
        </div>
      </div>
      <div className="mt-2 px-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[#7A7687]">
            +7(495)000-00-00 <br />
            info@mail.ru <br />
          </p>
          <p className="text-[#7A7687]">
            Пн-Пт с 09:00-19:00 <br /> Сб-Вс - выходной
          </p>
        </div>
        <hr />
        <div className="flex items-center justify-between py-4">
          <p>Каталог товаров</p>
          <MdKeyboardArrowRight size={23} />
        </div>
        <hr />
        <div className="flex items-center justify-between py-4">
          <p>Информация</p>
          <MdKeyboardArrowRight size={23} />
        </div>
        <hr />
        <div className="flex items-center justify-between py-4">
          <p>Контакты</p>
          <MdKeyboardArrowRight size={23} />
        </div>
        <hr />
        <p className="py-4">О нас</p>
        <hr />
        <p className="py-4">Сравнение</p>
        <hr />
      </div>
    </div>
  );
};

export default HamburgerModal;

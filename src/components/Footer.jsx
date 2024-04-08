import { Link } from "react-router-dom";

// icons
import { GoArrowUpRight } from "react-icons/go";
import { LazyLoadImage } from "react-lazy-load-image-component";

// images
import LogoFooter from "../assets/LogoFooter.svg";
import WikiSvg from "../assets/WikiSvg.svg";
import TgSvg from "../assets/TgSvg.svg";
import WhatSappSvg from "../assets/WhatSappSvg.svg";
import masterCard from "../assets/masterCard.svg";
import visaCard from "../assets/visaCard.svg";
import mirCard from "../assets/mirCard.svg";
import AccordionComp from "./AccordionComp";

const Footer = () => {
  return (
    <footer className="mt-0  bg-[#088269] py-12">
      <div className="mx-auto w-full max-w-[1300px] px-5 text-[12px]  xl:text-[14px]">
        <div className="mb-10 hidden justify-between gap-1 md:flex">
          <div>
            <h3 className="mb-3 font-semibold text-[#F8F7F3]">Покупателям</h3>
            <div className="mb-2 h-[1px] w-full bg-[#F8F7F3]"></div>
            <div className="flex gap-10">
              <ul className="flex flex-col gap-1 text-[#F8F7F3]">
                <li className="cursor-pointer duration-150 hover:scale-105">
                  О компании
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Сертификаты
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Вакансии
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Гарантии
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Услуги
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Акции
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Доставка
                </li>
              </ul>
              <ul className="flex flex-col gap-1 text-[#F8F7F3]">
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Оплата
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Возврат
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  FAQ
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Лизинг
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Отзывы
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Блог
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-[#F8F7F3]">Каталог</h3>
            <div className="mb-2 h-[1px] w-full bg-[#F8F7F3]"></div>
            <div className="flex gap-10">
              <ul className="flex flex-col gap-1 text-[#F8F7F3]">
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Реанимация
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Хирургия
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Офтальмология
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Лабораторная диагностика
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Акушерство и Гинекология
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Гистология
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Косметология
                </li>
              </ul>
              <ul className="flex flex-col gap-1 text-[#F8F7F3]">
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Орториноларингология
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Рентгенология и томография
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Стрерилизация
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Физиотерапия и реабилитация
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Функциональная диагностика
                </li>
                <li className="cursor-pointer duration-150 hover:scale-105">
                  Эндоскопия
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-[#F8F7F3]">Контакты</h3>
            <div className="mb-2 h-[1px] w-full bg-[#F8F7F3]"></div>
            <div>
              <address className="mb-5 not-italic">
                <h3 className="text-[#F8F7F3]">Адрес:</h3>
                <p className="text-[#F8F7F3]">
                  г. Москва, ул. Московская, д. 35{" "}
                </p>
              </address>
              <Link
                to="/home"
                className="mb-5 flex items-center gap-1 text-[#F8F7F3]"
              >
                <p>Карта проезда</p>
                <GoArrowUpRight size={23} />
              </Link>
              <p className="mb-5 text-[#F8F7F3]">
                График работы: <br /> Пн-Пт с 09:00-19:00, <br /> Сб-Вс -
                выходной
              </p>
              <div className="flex flex-col gap-[2px] text-[#F8F7F3]">
                <Link to="#">+7 000-000-00-00</Link>
                <Link to="#">+7 495-000-00-00</Link>
                <Link to="#">8 800-000-00-00</Link>
                <Link to="#">info@mail.ru</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 flex flex-col gap-[5px] md:hidden">
          <Link to="/home">
            <LazyLoadImage src={LogoFooter} alt="Logo" width={73} height={40} />
          </Link>
          <p className="text-[#F8F7F3]">ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»</p>
        </div>
        <AccordionComp title={"Покупателям"} />
        <AccordionComp title={"Каталог"} />
        <AccordionComp title={"Контакты"} />
        <div className="mb-4 hidden h-[1px] w-full bg-[#E5E2EE] md:block"></div>
        <div className="flex flex-col justify-between  gap-10 md:flex-row md:gap-0">
          <div className="hidden flex-col gap-[5px] md:flex">
            <Link to="/">
              <LazyLoadImage
                src={LogoFooter}
                alt="Logo"
                width={73}
                height={40}
              />
            </Link>
            <p className="text-[#F8F7F3]">ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»</p>
          </div>
          <div>
            <h3 className="mb-[10px] text-[#F8F7F3]">Мы в соцсетях</h3>
            <div className="flex gap-2">
              <Link to="/">
                <LazyLoadImage src={WikiSvg} width={24} height={24} />
              </Link>
              <Link to="/">
                <LazyLoadImage src={TgSvg} width={24} height={24} />
              </Link>
              <Link to="/">
                <LazyLoadImage src={WhatSappSvg} width={24} height={24} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5 md:gap-3 xl:flex-row">
            <ul className="flex flex-col gap-2 text-[#F8F7F3]">
              <li>Партнерская программа</li>
              <li>Оптовые продажи</li>
              <li>Реквизиты</li>
            </ul>
            <ul className="flex flex-col gap-2 text-[#F8F7F3]">
              <li>Политика конфиденциальности</li>
              <li>Условия соглашения</li>
              <li>Карта сайта</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-[10px] text-[#F8F7F3]">Способы оплаты</h4>
            <div className="flex gap-2">
              <LazyLoadImage
                src={masterCard}
                alt="masterCard img"
                width={49}
                height={30}
              />
              <LazyLoadImage
                src={visaCard}
                alt="visaCard img"
                width={49}
                height={30}
              />{" "}
              <LazyLoadImage
                src={mirCard}
                alt="mirCard img"
                width={49}
                height={30}
              />
            </div>
          </div>
        </div>
        <div className="mt-[60px] flex flex-col  justify-between gap-2 md:flex-row">
          <p className="w-full max-w-[153px] text-[#F8F7F3]">
            © 2022 Медоборудование Все права защищены
          </p>
          <p className=" text-[#F8F7F3] opacity-[0.6]">
            Информация на данном сайте носит справочный характер и не является
            публичной офертой, определяемой положениями Статьи 437 Гражданского
            кодекса Российской Федерации
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

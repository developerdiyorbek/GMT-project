import { LazyLoadImage } from "react-lazy-load-image-component";
import heroImg from "../assets/heroImg22.png";

import React, { useRef } from "react";
import Slider from "react-slick";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export default function Hero() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div className="slider-container max-w-[1300px] w-full px-5 my-5 sm:my-7 mx-auto relative">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {[1, 2, 3, 4].map((i) => (
          <div key={i}>
            <div className="flex flex-col  gap-6 rounded-[10px] bg-[#E5E4ED] xl:flex-row">
              <div>
                <div className="px-5 pt-4">
                  <h1 className="mb-[15px] text-[28px] font-medium text-[#202020] sm:mb-7 sm:text-[34px]">
                    Заголовок баннера в пару строк
                  </h1>
                  <p className="sm: mb-6 text-[12px] font-medium text-[#7A7687] sm:mb-10 sm:text-[14px] md:mb-10 md:text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor{" "}
                  </p>
                  <div className="mb-6 flex items-center gap-[10px] md:gap-4">
                    <button className="rounded-[50px] bg-[#088269] px-5 py-2 text-[12px] font-semibold text-[#F8F7F3] sm:text-[14px] md:text-[16px]">
                      Запросить цену
                    </button>
                    <button className="rounded-[50px] border-[2px] border-[#D5D1E1] px-5 py-2 text-[12px] font-semibold text-[#088269] sm:text-[14px] md:text-[16px] hover:border-[#07745E] duration-150 focus:bg-[#E1EFE6]">
                      В каталог
                    </button>
                  </div>
                </div>
              </div>
              <img src={heroImg} alt="heroImg" className="h-full" />
            </div>
          </div>
        ))}
      </Slider>
      <div>
        <button
          className="button absolute bottom-6 right-28 border-[1px] border-[#D5D1E1] rounded-full p-3 hover:border-[#07745E] duration-200 focus:bg-[#E1EFE6] hidden md:block bg-white"
          onClick={previous}
        >
          <FaLongArrowAltLeft size={20} />
        </button>
        <button
          className="button absolute bottom-6 right-10 order-[1px] border-[#D5D1E1] rounded-full p-3 hover:border-[#07745E] duration-200 focus:bg-[#E1EFE6] hidden md:block bg-white"
          onClick={next}
        >
          <FaLongArrowAltRight size={20} />
        </button>
      </div>
    </div>
  );
}

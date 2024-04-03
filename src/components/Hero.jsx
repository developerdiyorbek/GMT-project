import { LazyLoadImage } from "react-lazy-load-image-component";

import heroImg from "../assets/heroImg22.png";

export function Hero() {
  return (
    <div className="mx-auto my-5 w-full max-w-[1300px] px-5 sm:my-7">
      <div className="flex flex-col gap-6 rounded-[10px] bg-[#E5E4ED] md:flex-row">
        <div>
          <div className="px-5 pt-4">
            <h1 className="mb-[15px] text-[28px] font-medium text-[#202020] sm:mb-7 sm:text-[34px]">
              Заголовок баннера в пару строк
            </h1>
            <p className="sm: mb-6 text-[12px] font-medium text-[#7A7687] sm:mb-10 sm:text-[14px] md:mb-10 md:text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </p>
            <div className="mb-6 flex items-center gap-[10px] md:gap-4">
              <button className="rounded-[50px] bg-[#088269] px-5 py-2 text-[12px] font-semibold text-[#F8F7F3] sm:text-[14px] md:text-[16px]">
                Запросить цену
              </button>
              <button className="rounded-[50px] border-[1px] border-[#D5D1E1] px-5 py-2 text-[12px] font-semibold text-[#088269] sm:text-[14px] md:text-[16px]">
                В каталог
              </button>
            </div>
          </div>
        </div>
        <div>
          <LazyLoadImage src={heroImg} alt="heroImg" className="h-full" />
        </div>
      </div>
    </div>
  );
}

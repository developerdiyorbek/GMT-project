import BrendsCarousel from "./BrandsCarousel";

const Brends = () => {
  return (
    <section className="mb- mx-auto mb-[120px] max-w-[1300px] px-5 sm:mb-[120px] md:mb-[150px]">
      <div className="flex flex-col md:justify-between  xl:flex-row">
        <div>
          <h2 className=" mb-[10px] text-[18px] font-medium text-[#202020] sm:text-[20px] md:mb-[25px] md:text-[30px]">
            Бренды
          </h2>
          <p className="mb-4 text-[12px]  font-medium text-[#202020] opacity-[0.5] sm:text-[14px] md:text-[16px]">
            Эксклюзивные поставщики
          </p>
        </div>
        <div className="relative">
          <BrendsCarousel />
        </div>
      </div>
    </section>
  );
};

export default Brends;

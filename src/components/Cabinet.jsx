import CabinetCarousel from "./CabinetCarousel";

const Cabinet = () => {
  return (
    <section className="mx-auto my-14 w-full max-w-[1300px] px-5 sm:my-[120px] md:my-[150px]">
      <div>
        <h3 className="mb-3 text-[18px] font-medium text-[#202020] sm:mb-9 sm:text-[20px] md:mb-10 md:text-[30px]">
          Комплексное оснащение кабинетов
        </h3>
      </div>
      <CabinetCarousel />
      <div className="mr-5 mt-5  flex flex-col justify-end gap-3  sm:flex-row md:mr-10">
        <button className="w-3/4 rounded-[50px] border-[1px] border-[#D5D1E1] px-5 py-2 text-[12px] font-semibold text-[#088269] sm:w-auto sm:text-[14px] md:text-[16px]">
          Бесплатная консультация
        </button>
        <button className="w-3/4 rounded-[50px] bg-[#088269] px-5 py-2 text-[12px] font-semibold text-[#F8F7F3] sm:w-auto sm:text-[14px] md:text-[16px]">
          Рассчитать стоимость
        </button>
      </div>
    </section>
  );
};

export default Cabinet;

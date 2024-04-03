const Subscribe = () => {
  return (
    <div className="Subscribe   bg-[#E5E4ED]  py-8">
      <div className="mx-auto flex w-full max-w-[1300px] flex-col justify-end px-5 sm:flex-row">
        <div className="sm:w-[50%]">
          <h4 className="mb-2 text-[18px] text-[#202020] md:mb-5 md:text-[20px] xl:text-[30px]">
            Подпишитесь и будьте в курсе!
          </h4>
          <p className="mb-[30px] text-[12px] font-medium text-[#7A7687] md:mb-11 md:text-[14px] xl:text-[16px]">
            Акции, скидки, распродажи ждут!
          </p>
          <div className="mb-3 flex w-[90%] justify-between rounded-[50px] bg-white pl-[25px] xl:mb-5">
            <input
              type="email"
              placeholder="Введите email"
              className="text-[12px] text-[#7A7687] outline-none md:text-[12px]"
            />
            <button className="rounded-[50px] bg-[#088269] px-7 py-3 text-[12px] font-semibold text-[#F8F7F3] md:text-[14px]">
              Подписаться
            </button>
          </div>
          <div className="flex  items-center gap-[10px]">
            <input
              className="h-4 w-4 cursor-zoom-in"
              type="checkbox"
              id="checkboxDefault"
            />
            <label
              className="inline-block text-[10px] text-[#202020]  hover:cursor-pointer  sm:text-[12px]"
              htmlFor="checkboxDefault"
            >
              Я даю согласие на обработку своих персональных данных.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

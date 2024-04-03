import NewsCarousel from "./NewsCarousel";

const News = () => {
  return (
    <section className="mx-auto mb-[120px] max-w-[1300px] px-5 sm:mb-[120px] md:mb-[150px]">
      <div className="flex flex-col md:justify-between  xl:flex-row">
        <div>
          <h2 className="mb-8 text-[18px] font-medium text-[#202020] sm:text-[20px] md:text-[30px]">
            Новости компании
          </h2>
        </div>
        <div className="relative">
          <NewsCarousel />
        </div>
      </div>
    </section>
  );
};

export default News;

import ParnetMarquee from "./PartnerMarquee";

const Partners = () => {
  return (
    <div className="my-[60px] bg-[#E5E4ED] py-[50px] sm:my-[120px] sm:py-[37px] md:my-[150px] md:py-[100px]">
      <div className="mx-auto mb-10 flex max-w-[1300px] flex-col gap-[50px] px-5 sm:mb-[60px] sm:flex-row sm:gap-[100px] md:mb-[80px] md:gap-[400px]">
        <h2 className="text-[18px] font-medium text-[#202020] sm:text-[20px] md:text-[30px]">
          Наши клиенты
        </h2>
        <p className="text-[28px] font-medium text-[#202020] sm:max-w-[300px] sm:text-[34px] md:text-[48px]">
          БОЛЕЕ <span className="text-[#088269]">5000</span> УСПЕШНЫХ ПРОЕКТОВ
        </p>
      </div>
      <ParnetMarquee />
    </div>
  );
};

export default Partners;

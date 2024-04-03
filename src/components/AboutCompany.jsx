import { AboutCompAccordion } from "./AboutCompAccordion";

const AboutCompany = () => {
  return (
    <div className="my-[60px] bg-[#088269]  sm:my-[120px] md:my-[150px]">
      <div className="mx-auto  w-full max-w-[1300px] px-5 py-[60px]  md:py-[90px]">
        <div className="flex flex-col justify-between  gap-10 sm:flex-row sm:gap-0">
          <h3 className="text-[18px] font-medium text-[#F8F7F3] sm:text-[20px] md:text-[30px]">
            Часто задоваемые вопросы
          </h3>
          <div className="flex w-full flex-col gap-4 sm:w-1/2">
            <AboutCompAccordion title={"О компании"} />
            <AboutCompAccordion title={"Преимущества сотрудников"} />
            <AboutCompAccordion title={"Достижения компании"} />
            <AboutCompAccordion title={"Карьерный рост"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;

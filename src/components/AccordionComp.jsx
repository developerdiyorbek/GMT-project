import { useState } from "react";

const AccordionComp = ({ title }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-5  w-[100%] md:hidden">
      <div className="divide-y divide-slate-200 text-white">
        <div>
          <h2>
            <button
              id="faqs-title-01"
              type="button"
              className="flex w-full items-center justify-between py-2 text-left font-semibold"
              onClick={toggleAccordion}
              aria-expanded={expanded}
              aria-controls="faqs-text-01"
            >
              <span className="text-[15px]">{title}</span>
              <hr className="text-white" />
              {expanded ? (
                <span className="text-[15px]">-</span>
              ) : (
                <span className="text-[15px]">+</span>
              )}
            </button>
          </h2>
          <div
            id="faqs-text-01"
            role="region"
            aria-labelledby="faqs-title-01"
            className={`grid overflow-hidden text-sm text-white transition-all duration-300 ease-in-out ${
              expanded
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <ul className="flex flex-col gap-1">
                <li>О компании</li>
                <li>Сертификаты</li>
                <li>Вакансии</li>
                <li>Гарантии</li>
                <li>Услуги</li>
                <li>Акции</li>
                <li>Доставка</li>
                <li>Оплата</li>
                <li>Возврат</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionComp;

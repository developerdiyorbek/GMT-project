import Marquee from "react-fast-marquee";
import { partnerCard } from "../constants/PartnerCard";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ParnetMarquee = () => (
  <Marquee>
    <div className="flex gap-6 sm:gap-10">
      {partnerCard.map((card) => (
        <div
          key={card.id}
          className="flex
flex-col items-center rounded-[10px] border-[1px] border-[#E1DFE7]"
        >
          <div className="h-[160px] w-full rounded-t-[10px] bg-white pt-[20px]">
            <LazyLoadImage
              src={card.src}
              alt={card.title}
              className="mx-auto block"
            />
          </div>
          <div className="rounded-b-[10px] bg-[#F8F7F3] px-[15px] py-[14px] sm:py-[15px] md:px-[20px] md:py-[20px]">
            <p className="text-[12px] font-medium text-[#202020] sm:text-[14px] md:text-[16px]">
              {card.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  </Marquee>
);

export default ParnetMarquee;

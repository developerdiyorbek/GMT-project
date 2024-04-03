import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { brendsCard } from "../constants/BrendsCard";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-10 top-[280px] hidden h-8 w-8 rounded-full bg-green-500 pt-2 text-center md:block`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-0 top-[280px] hidden h-8 w-8 rounded-full bg-green-500 pt-2 text-center md:block`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function BrendsCarousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          nextArrow: null,
          prevArrow: null,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <div className="relative w-[95%] max-w-[900px]">
        <Slider {...settings}>
          {brendsCard.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center rounded-[10px] border-[1px] border-[#E1DFE7]"
            >
              <div className="flex h-[150px] w-full items-center rounded-t-[10px] bg-white pt-[20px]">
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
        </Slider>
      </div>
    </div>
  );
}

export default BrendsCarousel;

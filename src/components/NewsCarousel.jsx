import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { newsCard } from "../constants/newsCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-10 top-[480px] h-8 w-8 rounded-full bg-green-500 pt-2 text-center`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-0  top-[480px]  h-8 w-8 rounded-full bg-green-500 pt-2 text-center`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function NewsCarousel() {
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
          {newsCard.map((card) => (
            <div
              key={card.id}
              className="rounded-[10px] border-[1px] border-[#E5E2EE]"
            >
              <LazyLoadImage
                src={card.src}
                alt={card.title}
                className="block w-full rounded-t-[10px]"
              />
              <div className="py-4 pl-3 md:py-5">
                <span className="mb-1 block text-[12px] text-[#7A7687]">
                  07.11.2022
                </span>
                <h4 className="text-[16px]  font-semibold md:text-[18px]">
                  Название новости
                </h4>
                <p className="text-[12px] font-medium text-[#202020] sm:text-[14px] md:text-[16px]">
                  Допускает внедрение поэтапного и развития общества.
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default NewsCarousel;

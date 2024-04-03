import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CabinetCard } from "../constants/CabinetCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-10 hidden  h-8 w-8 rounded-full bg-green-500 pt-2 text-center sm:top-[590px]`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-0 hidden  h-8  w-8 rounded-full bg-green-500 pt-2 text-center sm:top-[590px]`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function CabinetCarousel() {
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
        breakpoint: 1000,
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
      <div className=" w-[95%]">
        <Slider {...settings}>
          {CabinetCard.map((card) => (
            <div
              key={card.id}
              className="rounded-[10px] border-[1px] border-[#E5E2EE]"
            >
              <LazyLoadImage
                src={card.src}
                alt={card.title}
                className="block w-full h-full rounded-t-[10px]"
                height={480}
              />
              <div className="py-4 pl-3 md:py-5">
                <h4 className="text-[16px]  font-semibold md:text-[18px]">
                  {card.title}
                </h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CabinetCarousel;

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../../assets/hero/headphone.png";
import image2 from "../../assets/category/vr.png";
import image3 from "../../assets/category/macbook.png";
import Button from "../Shared/Button";
import Aos from "aos";

const HeroData = [
  {
    id: 1,
    img: image1,
    subtitle: "Bates Solo",
    title: "wireless",
    title2: "Headphone",
    description:
      "Lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    img: image2,
    subtitle: "Bates Solo",
    title: "wireless",
    title2: "Virtual",
    description:
      "Lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 3,
    img: image3,
    subtitle: "Bates Solo",
    title: "wireless",
    title2: "Laptops",
    description:
      "Lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

export default function Hero({ handleOrderPopup }) {
  Aos.init({
    duration: 1000,
    offset: 100,
    once: true
  });
  const settings = {
    dots: false,
    arrows: false,
    Infinite: true,
    speed: 800,
    slideToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFoucs: true
  };
  return (
    <div className="container">
      <div
        className="hero-bg-color w-full overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] 
    flex justify-center items-center"
      >
        <div className="container pb-8 sm:pb-0">
          {/* Hero Section */}
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 gap-x-24 sm:grid-cols-2">
                  {/* text content section */}
                  <div data-aos="zoom-out" data-aos-duration="500"
                    className=" flex flex-col justify-center gap-2 pt-12
                                      sm:pt-0 text-center sm:text-left
                                        z-10   "
                  >
                    <h1 className=" text-2xl sm:text-6xl lg:text-2xl uppercas dark:text-white sm:text-[80px] md:text- [100px] xl:text[150px] font-bold">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {data.title}
                    </h1>
                    <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold ">
                      {data.title2}
                    </h1>
                    <div data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="500"
                    data-aos-delay="300"
                    
                    className="ml-3">
                      <Button
                        bgColor="bg-primary"
                        textColor="text-white"
                        text="Shop By Category"
                        handler={handleOrderPopup}
                      />
                    </div>
                  </div>
                  {/* img section */}
                  <div className="z-[9999]">
                    <img 
                    data-aos="zoom-in" data-aos-duration="500"
                      src={data.img}
                      className=" w-[450px] h-[450px] drop-shadow-[-8px_4px_4px_rgba(0,0,0,4)] sm:h-[450px] object-contain sm:scale-105  lg:scale-110"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

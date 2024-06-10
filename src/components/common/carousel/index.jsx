import React from "react";
import useDeviceDetection from "../../../hooks/useDeviceDetection";
import Carousel from "react-multi-carousel";
import RightIconSvg from "../../../assets/icons/rightIconSvg";

const CommonCarousel = ({ children }) => {
  const DeviceData = useDeviceDetection();
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;

    return (
      <div
        className="carousel-button-group mb-4  gap-4 flex justify-between mt-2
          items-center w-full"
      >
        <button
          // disabled={currentSlide === 1}
          className={`grid place-content-center p-3 rotate-180 ${
            currentSlide === 1 ? "bg-gray-200" : ""
          }`}
          onClick={() => previous()}
        >
          <RightIconSvg />
        </button>
        <button onClick={() => next()}>
          <span className="p-3 grid place-content-center  ">
            <RightIconSvg />
          </span>
        </button>
      </div>
    );
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 640 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="relative ">
      <Carousel
        className="mt-5 relative"
        swipeable={true}
        draggable={false}
        partialVisbile
        rewindWithAnimation
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        deviceType={DeviceData}
        // customTransition="all .5"
        transitionDuration={300}
        renderButtonGroupOutside
        renderDotsOutside
        containerClass="carousel-container"
        arrows={false}
        customButtonGroup={<ButtonGroup />}
        dotListClass="custom-dot-list-style "
        itemClass=" h-max "
      >
        {children}
      </Carousel>
    </div>
  );
};

export default CommonCarousel;

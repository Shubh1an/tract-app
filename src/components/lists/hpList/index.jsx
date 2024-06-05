import Carousel from "react-multi-carousel";
import { Devices, HPData, HPDataMobile } from "../../../shared/constant";
import RightIconSvg from "../../../assets/icons/rightIconSvg";
import useDeviceDetection from "../../../hooks/useDeviceDetection";

const HpList = ({ device }) => {
  const DeviceData = useDeviceDetection();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 640 },
      items: 2,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

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

  return (
    <>
      {device >= Devices.Mobile ? (
        <div className="grid grid-cols-auto-fit-100 mt-5 justify-between items-center gap-4 overflow-hidden">
          {HPData.map((data, index) => (
            <div
              className="bg-white rounded-xl shadow-[0px 4px 5px 0px #afadad] py-5 w-48 grid place-content-center"
              key={data?.title + index}
            >
              <p className="text-xs text-gray-400 mb-1 text-center">HP</p>
              <p className="text-base text-black font-semibold">
                {data?.title}
              </p>
            </div>
          ))}
          {/* </Carousel> */}
        </div>
      ) : (
        // <div className="flex  mt-5 justify-between items-center gap-4 overflow-hidden">
        <div className="relative">
          <Carousel
            className="mt-5 relative"
            swipeable={false}
            draggable={false}
            rewindWithAnimation
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            deviceType={DeviceData}
            customTransition="all .5"
            transitionDuration={300}
            renderButtonGroupOutside
            renderDotsOutside
            containerClass="carousel-container"
            arrows={false}
            customButtonGroup={<ButtonGroup />}
            dotListClass="custom-dot-list-style "
            itemClass="carousel-item-padding-40-px"
          >
            {HPDataMobile.map((data, index) => (
              <div className="space-y-3" key={data?.title1 + index}>
                <div className="bg-white rounded-xl shadow-2xl py-5 w-48 grid place-content-center">
                  <p className="text-xs text-gray-400 mb-1 text-center">HP</p>
                  <p className="text-base text-black font-semibold">
                    {data?.title1}
                  </p>
                </div>
                {data?.title2 && (
                  <div className="bg-white rounded-xl shadow-2xl py-5 w-48 grid place-content-center">
                    <p className="text-xs text-gray-400 mb-1 text-center">HP</p>
                    <p className="text-base text-black font-semibold">
                      {data?.title2}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </Carousel>
        </div>
        // </div>
      )}
    </>
  );
};

export default HpList;

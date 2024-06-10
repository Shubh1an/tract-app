import { useRef, useState } from "react";
import RightWhiteArrowIcon from "../../../assets/icons/rightWhiteArrowSvg";
import { Devices, PopularTractorList } from "../../../shared/constant";

export const TractCard = ({ tract, index }) => {
  return (
    <div className="rounded-lg border p-4 w-full max-w-72">
      <p className="text-left font-semibold mb-2  w-full mx-auto">
        {tract?.name}
      </p>
      <div className="text-white bg-green-600 rounded-2xl text-xs md:text-sm p-1 mb-2 flex items-center justify-center gap-3 px-3 py-1 w-fit">
        View Details
        <RightWhiteArrowIcon />
      </div>
      <img
        className="object-contain mb-2 mx-auto"
        src={tract?.image}
        alt="img"
      />
      <div className="flex items-center w-[95%] mx-auto justify-around py-2 px-2 rounded-md text-xs bg-[#c0ebc0]">
        <div className="grid place-content-center text-center">
          <p className="text-gray-400 ">HP</p>
          <p className="text-black text-base font-bold">{tract?.hp}</p>
        </div>
        <div className=" h-7 border border-gray-400" />
        <div className="grid text-center place-content-center">
          <p className="text-gray-400 ">Cylinder</p>
          <p className="text-black text-base font-bold">{tract?.cylinder}</p>
        </div>
        <div className="h-7  border border-gray-400" />
        <div className="grid place-content-center text-center">
          <p className="text-gray-400 ">Lifting Capacity</p>
          <p className="text-black text-base font-bold">
            {tract?.liftingCapacity}kg
          </p>
        </div>
      </div>
    </div>
  );
};
const PopularTractList = ({ device }) => {
  const [activeCard, setActiveCard] = useState(0);

  const scrollToElement = (e) => {
    scrollIntoViewHorizontally(e.currentTarget, e.target);
  };

  const scrollIntoViewHorizontally = (container, child) => {
    const child_offsetRight = child.offsetLeft + child.offsetWidth;
    const container_scrollRight = container.scrollLeft + container.offsetWidth;
    console.log(container.scrollLeft, child.offsetLeft);

    if (container.scrollLeft > child.offsetLeft) {
      container.scrollLeft = child.offsetLeft;
      return;
    }

    if (container_scrollRight < child_offsetRight) {
      container.scrollLeft += child_offsetRight - container_scrollRight;
    }
  };
  return (
    <>
      {device >= Devices.Mobile ? (
        <div className="w-full overflow-x-hidden">
          <div className="flex items-center gap-3 justify-between mt-5 overflow-x-auto w-[99%] custom-scrollbar">
            {PopularTractorList.map((tract, index) => (
              <TractCard
                key={tract?.name + index}
                tract={tract}
                index={index}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 justify-between mt-5 w-full">
          <div className="mx-auto mb-2">
            <TractCard
              tract={PopularTractorList[activeCard]}
              index={activeCard}
            />
          </div>
          <div
            onClick={(e) => scrollToElement(e)}
            className="flex items-center overflow-x-scroll gap-2 ml-5 w-full py-1 custom-scrollbar-mobile"
          >
            {PopularTractorList.map((tract, index) => (
              <button
                // ref={divRef}
                onClick={(e) => {
                  setActiveCard(index);
                }}
                className="tab"
                key={tract?.name + index}
              >
                <div
                  className={`w-[102px] aspect-[3/2] grid place-content-center border rounded-md hover:cursor-pointer ml-2 ${
                    activeCard === index ? "border-green-400 scale-110" : ""
                  }`}
                >
                  <img src={tract?.mobileImg} alt="img" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PopularTractList;

import React from "react";
import { Devices } from "../../../shared/constant";
import Carousel from "react-multi-carousel";
import RightIconSvg from "../../../assets/icons/rightIconSvg";
import useDeviceDetection from "../../../hooks/useDeviceDetection";
import { MiniTractorList } from "../../../shared/constant";
import CommonCarousel from "../../common/carousel";

export const TractCard = ({ tract, index, className }) => {
  return (
    <div className="py-8">
      <div
        className={`rounded-lg border p-4  relative w-72 sm:mb-8 md:mb-0  pb-9 `}
      >
        <img
          className="object-contain mb-2 mx-auto"
          src={tract?.image}
          alt="img"
        />
        <p className="text-center font-semibold mb-2  w-64 mx-auto">
          {tract?.name}
        </p>
        <div className="flex absolute top-[90%] items-center w-60 md:w-64 justify-around py-2 px-2 rounded-md text-xs bg-[#c0ebc0]">
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
    </div>
  );
};
const MiniTractList = ({ device }) => {
  return (
    <>
      {device >= Devices.Mobile ? (
        <div className="w-full overflow-hidden  mt-3">
          <div className="flex items-center gap-3 justify-between mt-5 overflow-x-auto  w-[99%]">
            {MiniTractorList.map((tract, index) => (
              <TractCard
                key={tract?.name + index}
                tract={tract}
                index={index}
                className={"h-[345px]"}
              />
            ))}
          </div>
        </div>
      ) : (
        <CommonCarousel>
          {MiniTractorList.map((tract, index) => (
            <TractCard key={tract?.name + index} tract={tract} index={index} />
          ))}
        </CommonCarousel>
      )}
    </>
  );
};

export default MiniTractList;

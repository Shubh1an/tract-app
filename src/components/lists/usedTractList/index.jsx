import LocationSvg from "../../../assets/icons/locationSvg";
import RightWhiteArrowIcon from "../../../assets/icons/rightWhiteArrowSvg";
import { Devices, UsedTractorList } from "../../../shared/constant";
import CommonCarousel from "../../common/carousel";
export const TractCard = ({ tract, className }) => {
  return (
    <div
      className={`w-72 relative overflow-hidden rounded-2xl md:${className}`}
    >
      <img src={tract?.image} alt="" className="w-72 max-w-fit" />
      <div className="absolute top-4 bg-[linear-gradient(90deg,_rgba(5,92,18,1)_0%,_rgba(0,130,17,1)_30%,_rgba(137,195,143,1)_46%,_rgba(0,140,21,1)_62%,_rgba(9,115,28,1)_100%)] py-2 w-64 text-white text-xs font-semibold text-center rotate-[-40deg] -left-[5.95rem] ">
        For Sell
      </div>
      <div className="bg-white px-2 py-3 w:64 md:w-72  ">
        <div className=" px-2">
          <p className="font-semibold text-green-700">{tract?.name}</p>
          <p className="font-semibold flex items-center justify-start gap-1 my-3">
            <LocationSvg color={"#000"} />
            {tract?.location}
          </p>
          <div className="flex items-center w-full justify-around py-2 px-2  text-xs ">
            <div className="grid place-content-center text-center">
              <p className="text-gray-400 ">HP</p>
              <p className="text-black text-base font-bold">{tract?.hp}</p>
            </div>
            <div className=" h-11 border border-green-400" />
            <div className="grid text-center place-content-center">
              <p className="text-gray-400 ">Year</p>
              <p className="text-black text-base font-bold">{tract?.year}</p>
            </div>
            <div className="h-11  border border-green-400" />
            <div className="grid place-content-center text-center">
              <p className="text-gray-400 ">Price</p>
              <p className="text-black text-base font-bold">₹ {tract?.price}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full mt-2 px-2 ">
          <div className="text-white bg-green-600 rounded-2xl text-xs md:text-sm p-1 mb-2 flex items-center justify-center gap-3 px-3 py-1 w-fit">
            View Details
            <RightWhiteArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
const UsedTractList = ({ device }) => {
  return (
    <>
      {device >= Devices.Mobile ? (
        <div className="w-full overflow-x-hidden mt-3">
          <div className="flex items-center gap-3 justify-between mt-5 overflow-x-auto w-[99%]">
            {UsedTractorList.map((tract, index) => (
              <TractCard key={tract?.image + index} tract={tract} />
            ))}
          </div>
        </div>
      ) : (
        <CommonCarousel>
          {UsedTractorList.map((tract, index) => (
            <TractCard
              key={tract?.image + index}
              tract={tract}
              className={"h-[345px]"}
            />
          ))}
        </CommonCarousel>
      )}
    </>
  );
};

export default UsedTractList;

import { Devices, LatestTractorList } from "../../../shared/constant";

import CommonCarousel from "../../common/carousel";

const LatestTractList = ({ device }) => {
  return (
    <>
      {device >= Devices.Mobile ? (
        <div className="w-full overflow-x-hidden mt-3">
          <div className="flex items-center gap-3 justify-between mt-5 overflow-x-auto w-[99%] custom-scrollbar">
            {LatestTractorList.map((tract, index) => (
              <div className="w-64" key={tract?.image + index}>
                <img src={tract?.image} alt="" className="w-64 max-w-fit" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <CommonCarousel>
          {LatestTractorList.map((tract, index) => (
            <div className="" key={tract?.image + index}>
              <img src={tract?.image} alt="" />
            </div>
          ))}
        </CommonCarousel>
      )}
    </>
  );
};

export default LatestTractList;

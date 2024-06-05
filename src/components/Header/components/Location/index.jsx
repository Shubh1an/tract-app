import DownIconSvg from "../../../../assets/icons/downIconSvg";
import LocationSvg from "../../../../assets/icons/locationSvg";

const LocationComponent = () => {
  return (
    <div className="relative flex justify-center gap-1 items-start hover:cursor-pointer shrink-1">
      <LocationSvg />
      <div className="text-left text-white ">
        <div style={{fontSize:"clamp(1rem, 2vw, 1.125rem)"}} className="flex items-center font-medium space-x-2 text-base">
          <p className="-mt-1 ">Location</p>
          <DownIconSvg />
        </div>
        <p style={{fontSize:"clamp(0.75rem, 1.5vw, 0.875rem)"}} className=" truncate lg:w-44 w-24">Select your current location</p>
      </div>
    </div>
  );
};

export default LocationComponent;

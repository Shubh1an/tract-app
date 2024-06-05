
import LocationSvg from "../../assets/icons/locationSvg";

const LocationMobileComponent = () => {
  return (
    <div className="bg-green-100 p-2 flex justify-between items-center rounded-xl px-4 ">
      <div className="text-green-700 flex items-center sm:space-x-2 space-x-1 font-semibold text-sm">
        <LocationSvg color={"#15803D"} /> <span>Select Location</span>
      </div>
      <div className="border border-green-400 p-1 px-2 text-[10px] text-green-400 rounded-lg hover:cursor-pointer">
        Allow Location
      </div>
    </div>
  );
};

export default LocationMobileComponent;

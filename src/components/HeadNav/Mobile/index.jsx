import NavData from "../navData";

const MobileNav = () => {
  const { navData } = NavData || {};
  return (
    <div className="flex items-center overflow-x-auto gap-3 ml-5 mb-2">
      {navData?.map(
        (navObj, index) =>
          index !== 0 && (
            <div key={navObj?.path} className="grid place-content-center">
              <div className="border rounded-lg p-1 w-[70px] h-[70px] grid place-content-center">
                <img src={navObj?.path} alt="img" className="w-full h-full" />
              </div>
              <p className="text-gray-600 text-xs font-semibold text-center">
                {navObj?.title}
              </p>
            </div>
          )
      )}
    </div>
  );
};

export default MobileNav;

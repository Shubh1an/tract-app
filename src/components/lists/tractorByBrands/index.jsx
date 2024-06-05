import { categoryData2 } from "../../../shared/constant";

const TractorByBrands = () => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-auto-fit-107 items-center justify-between gap-3  flex-wrap mb-5">
        {categoryData2.map((navObj, index) => (
          <div key={navObj?.path + index} className={`min-w-[117px]  `}>
            <div
              className={`grid px-4 aspect-[3/2] place-content-center rounded-lg shadow-css py-4 ${
                index == 0 && "border-2 border-green-600"
              }`}
            >
              <img
                src={navObj?.path}
                alt=""
                className="object-contain h-full w-full"
              />
            </div>
            <p className="md:text-base text-xs sm:text-sm text-center mt-4 font-semibold">
              {navObj?.title}
            </p>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center w-full my-5 mt-7">
        <button className="w-fit text-center text-white px-3 py-2 rounded-lg bg-green-600 font-semibold mx-auto focus:ring-green-300 focus:ring-2  text-xs">
          View All Brands
        </button>
      </div> */}
    </div>
  );
};

export default TractorByBrands;

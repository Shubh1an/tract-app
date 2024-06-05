import React from "react";
import SearchSvg from "../../../assets/icons";
import MicSvg from "../../../assets/icons/micIconSvg";

const Search = ({ className, search, onType, placeholder }) => {
  return (
    <div
      className={`${className} flex items-center rounded-[30px] border-[1.5px] border-gray-200 md:bg-transparent bg-white  w-full md:p-1 p-0 pr-3 `}
    >
      <input
        className="py-2 md:px-3 px-5  md:text-white h-full focus:outline-none rounded-2xl bg-transparent w-full"
        value={search}
        onChange={onType}
        placeholder={placeholder}
      />
      <div className="flex items-center h-full  space-x-3 ">
        <SearchSvg className={"#d1d5db"} />
        <div className="w-0.5 bg-gray-300 md:bg-white h-5 md:h-4" />
        <MicSvg className={"#d1d5db"} />
      </div>
    </div>
  );
};

export default Search;

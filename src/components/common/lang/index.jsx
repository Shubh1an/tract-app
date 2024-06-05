import { useState } from "react";
import LanguageIconSvg from "../../../assets/icons/changeLangSvg";
import DownIconSvg from "../../../assets/icons/downIconSvg";

const LanguageDropdown = ({ device }) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="px-2 grid place-content-center place-items-center hover:cursor-pointer ">
      <div
        className="flex items-center gap-1"
        onClick={() => setShowOptions(!showOptions)}
      >
        <LanguageIconSvg device={device} /> <DownIconSvg />
      </div>
      {showOptions ? (
        <div className="absolute top-[160%]  w-max ">
          <div className="bg-white w-32 px-2 py-5  rounded-xl border relative shadow-css">
            <div className="up-arrow absolute -top-[10px] left-1/2"></div>
            <div className="flex items-center mb-4 radio">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                checked
                name="default-radio"
                className="w-4 h-4 accent-gray-950 bg-gray-100 border-gray-300 hover:cursor-pointer dark:bg-gray-700 dark:border-gray-600 "
              />
              <label
                htmlFor="default-radio-1 "
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 radio-label"
              >
                Hindi
              </label>
            </div>
            <div className="flex items-center radio">
              <input
                id="default-radio-2"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 accent-gray-950  bg-gray-100 border-gray-300 hover:cursor-pointer dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 radio-label"
              >
                English
              </label>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LanguageDropdown;

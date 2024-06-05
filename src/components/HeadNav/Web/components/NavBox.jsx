import { useEffect, useState } from "react";
import DownIconSvg from "../../../../assets/icons/downIconSvg";

const NavBox = ({ imgPath, showDropDown = true, title, index, navData }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const nav_box = document.getElementById(`nav-box${index}`);
    nav_box.addEventListener("mouseover", () => setIsOpen(true));
    nav_box.addEventListener("mouseleave", () => setIsOpen(false));

    return () => {
      setIsOpen(false);
      nav_box.removeEventListener("mouseover", () => setIsOpen(true));
      nav_box.removeEventListener("mouseleave", () => setIsOpen(false));
    };
  }, []);

  return (
    <div
      id={`nav-box${index}`}
      className={`p-2 col-auto grid place-items-center relative  ${
        isOpen ? "border-b-2 border-green-700  cursor-pointer" : ""
      }`}
    >
      <div className="border rounded-xl grid place-content-center w-12 h-12 mx-auto">
        <img src={imgPath} alt="img" />
      </div>
      <p className="text-gray-400 bg-b font-bold flex items-center mt-2 gap-1 text-sm ">
        <span
          className={`text-nowrap ${isOpen ? "text-black" : "text-gray-400"}`}
        >
          {title}
        </span>
        {index !== 0 && (
          <span
            className={` transition delay-75 duration-150 ease-in-out ${
              isOpen ? "rotate-180 " : ""
            }`}
          >
            <DownIconSvg color={isOpen ? "#000002" : "#9CA3AF"} />
          </span>
        )}
      </p>
      {isOpen && showDropDown && (
        <div className="absolute bg-white top-[105%]  grid grid-cols-2 rounded-lg w-max gap-2 border -left-1 p-3 z-10">
          {navData?.map((nav) => (
            <div className="flex gap-2 items-center" key={nav?.path}>
              <img src={nav?.path} alt={"img"} />
              <span>{nav?.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBox;

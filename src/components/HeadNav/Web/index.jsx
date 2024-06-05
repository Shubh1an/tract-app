import NavData from "../navData";
import NavBox from "./components/NavBox";

const WebNav = () => {
  const { navData } = NavData || {};
  return (
    <div className="lg:w-[90%] md:w-full mx-auto relative">
      <div className="w-full grid grid-flow-col auto-cols-min  items-center gap-[2%] justify-between">
        {navData.map((navObj, index) => (
          <NavBox
            key={index + navObj?.path}
            imgPath={navObj?.path}
            showDropDown={index !== 0}
            title={navObj?.title}
            index={index}
            navData={navObj?.categoryData}
          />
        ))}
      </div>
    </div>
  );
};

export default WebNav;

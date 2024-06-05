import HamburgerSvg from "../../assets/icons/hamburgerSvg";
import { HomeIconSvg } from "../../assets/icons/homeIconSvg";
import RupeeSvg from "../../assets/icons/rupeeSvg";
import Logo from "../../assets/images/logo.png";
import { Devices, Sizes } from "../../shared/constant";
import Avatar from "../common/avatar/avatar";
import LanguageDropdown from "../common/lang";

import Search from "../common/search/search";
import LocationComponent from "./components/Location";
import SignInDropdown from "./components/SignInDropdown";

const Header = ({ device }) => {
  return (
    <div className="md:py-2 py-7 bg-green-900 md:border-none border-b rounded-b-[2rem] md:rounded-none fixed top-0 right-0 left-0 z-10">
      <div className="md:w-[93%] w-[95%] mx-auto  flex justify-between items-center">
        <div className="flex items-center justify-start gap-2">
          {device <= Devices?.Mobile ? <HomeIconSvg /> : <></>}
          <Avatar img={Logo} className={"h-full md:max-h-12 max-h-8"} />
        </div>
        <div className="md:max-w-[500px] w-11/12 mx-auto  absolute md:relative top-[80%] left-1 right-1 md:mx-2 flex-1">
          <Search />
        </div>
        <div className="flex  items-center justify-end lg:gap-3 md:gap-1 gap-3 shrink ">
          {device <= Devices?.Mobile ? <RupeeSvg /> : <LocationComponent />}
          <div className="relative  ">
            <LanguageDropdown device={device} />
          </div>
          <div className="">
            {device <= Devices?.Mobile ? <HamburgerSvg /> : <SignInDropdown />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

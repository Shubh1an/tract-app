import { useEffect, useState } from "react";
import { Devices } from "../../shared/constant";
import MobileNav from "./Mobile";
import WebNav from "./Web";

const HeaderNav = ({ device }) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    setToggle(!toggle);
  }, [device]);
  return <div>{device <= Devices.Mobile ? <MobileNav /> : <WebNav />}</div>;
};

export default HeaderNav;

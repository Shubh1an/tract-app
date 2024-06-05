import { useEffect, useState } from "react";
import { Sizes } from "../shared/constant";

const useDeviceDetection = () => {
  const [device, setDevice] = useState("");
  useEffect(() => {
    const handleDeviceDetection = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile =
        /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      const isTablet =
        /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);
      if (isMobile) {
        setDevice(Sizes?.Mobile);
      } else if (isTablet) {
        setDevice(Sizes?.Tablet);
      } else {
        setDevice(Sizes?.Desktop);
      }
    };
    handleDeviceDetection();
    window.addEventListener("resize", handleDeviceDetection);

    return () => {
      window.removeEventListener("resize", handleDeviceDetection);
    };
  }, []);
  return device;
};

export default useDeviceDetection;

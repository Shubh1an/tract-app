import "./App.css";
import HeaderNav from "./components/HeadNav";
import Header from "./components/Header";
import LocationMobileComponent from "./components/LocationMobileComponent";
import NavData from "./components/HeadNav/navData";
import useSize from "./hooks/useDeviceSize";
import { Devices } from "./shared/constant";
import CarouselComponent from "./components/carousel";
import CardComponent from "./components/Card";
import TractorByBrands from "./components/lists/tractorByBrands";

import HpList from "./components/lists/hpList";
import PopularTractList from "./components/lists/popularTractList";
import LatestTractList from "./components/lists/latestTractList";
import MiniTractList from "./components/lists/miniTractorList";
import UsedTractList from "./components/lists/usedTractList";

function App() {
  const [width] = useSize();

  return (
    <div>
      <Header device={width} />
      <div className="mt-24 md:mt-16">
        {width <= Devices.Mobile && (
          <div className="w-11/12 mx-auto my-3 mt-32">
            <LocationMobileComponent />
          </div>
        )}
        <HeaderNav device={width} />
        <CarouselComponent />
        <CardComponent
          className={"py-9 bg-white"}
          headTitle={"Tractors By Brands"}
          buttonText={"View All Brands"}
        >
          <TractorByBrands />
        </CardComponent>
        <CardComponent className={"py-9 bg-gray-200"} headTitle={"Select HP"}>
          <HpList device={width} />
        </CardComponent>
        <CardComponent
          className={"py-9 bg-white"}
          headTitle={"Popular Tractors"}
          buttonText={"View All Popular Tractors"}
        >
          <PopularTractList device={width} />
        </CardComponent>
        <CardComponent
          className={"py-9 bg-gray-200"}
          headTitle={"Latest Tractors"}
          buttonText={"View All Latest Tractors"}
        >
          <LatestTractList device={width} />
        </CardComponent>
        <CardComponent
          className={"py-9 bg-white"}
          headTitle={"Mini Tractors"}
          buttonText={"View All Mini Tractors"}
        >
          <MiniTractList device={width} />
        </CardComponent>
        <CardComponent
          className={"py-9 bg-gray-200"}
          headTitle={"Buy Used Tractor"}
          buttonText={"View All Second Hand Tractors"}
        >
          <UsedTractList device={width} />
        </CardComponent>
      </div>
    </div>
  );
}

export default App;

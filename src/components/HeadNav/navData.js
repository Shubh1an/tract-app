import Home from "../../assets/images/home.png";
import FirstIcon from "../../assets/images/1.png";
import SecondIcon from "../../assets/images/2.png";
import ThirdIcon from "../../assets/images/3.png";
import FourthIcon from "../../assets/images/4.png";
import FifthIcon from "../../assets/images/5.png";
import SixthIcon from "../../assets/images/6.png";
import SeventhIcon from "../../assets/images/7.png";
import EighthIcon from "../../assets/images/8.png";
import NinthIcon from "../../assets/images/9.png";
import { categoryData } from "../../shared/constant";

const NavData = {
  navData: [
    { path: Home, title: "Home" },
    {
      path: FirstIcon,
      title: "Buy new",
      categoryData: categoryData,
    },
    {
      path: SecondIcon,
      title: "Old Tractor",
      categoryData: categoryData,
    },
    {
      path: ThirdIcon,
      title: "Implements",
      categoryData: categoryData,
    },
    {
      path: FourthIcon,
      title: "Tyre",
      categoryData: categoryData,
    },
    {
      path: FifthIcon,
      title: "Mini Tractor",
      categoryData: categoryData,
    },
    {
      path: SixthIcon,
      title: "Videos",
      categoryData: categoryData,
    },
    {
      path: SeventhIcon,
      title: "Blogs",
      categoryData: categoryData,
    },
    {
      path: EighthIcon,
      title: "Loans",
      categoryData: categoryData,
    },
    {
      path: NinthIcon,
      title: "More",
      categoryData: categoryData,
    },
  ],
};
export default NavData;

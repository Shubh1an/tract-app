import { Carousel } from "react-responsive-carousel";
import Frame1 from "../../assets/images/Frame 1.png";
import Frame2 from "../../assets/images/Frame 2.png";
import Frame3 from "../../assets/images/Frame 3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const CarouselComponent = ({}) => {
  const imgArr = [Frame1, Frame3, Frame3];
  return (
    <div className="border-t border-green-400">
      <Carousel
        infiniteLoop
        showThumbs={false}
        dynamicHeight
        autoPlay
        showArrows
      >
        {imgArr.map((imageObj) => (
          <img
            key={imageObj}
            src={imageObj}
            className="w-full object-cover h-fit"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

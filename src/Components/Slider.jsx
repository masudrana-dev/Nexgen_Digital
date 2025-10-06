import slider1 from '../assets/slider-1.png'
import slider2 from '../assets/slider-2.png'
import slider4 from '../assets/slider-4.png'
import sectionBg from '../assets/slider-bg.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

export default function Slider() {
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${sectionBg})` }}
    >
      <div className="text-center mb-10">
        <h2 className="text-[56px] font-semibold text-gray-800">
          Industries We Serve
        </h2>
      </div>
         <div>
         <Carousel responsive={responsive}>
        <div><img src={slider1}/></div>
        <div><img src={slider2}/></div>
        <div><img src={slider4}/></div>
        <div><img src={slider1}/></div>
        <div><img src={slider2}/></div>
        <div><img src={slider4}/></div>
        <div><img src={slider1}/></div>
        <div><img src={slider2}/></div>
        <div><img src={slider4}/></div>
       </Carousel>;
     </div>
    </section>
  );
}


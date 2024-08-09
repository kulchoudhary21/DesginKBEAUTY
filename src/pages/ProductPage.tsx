import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/ProductPage.css";
import { useState } from "react";
const ProductPage = () => {
  const baseUrl = "../../public/images/";
  const [arr, setArr] = useState([1, 2]);
  const settings = {
    customPaging: function (i) {
      return (
        <div className="right-productpage">
          <a>
            <img src={`${baseUrl}/productpage${i + 1}.png`} />
          </a>
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      {/* <div className="left-productpage"> */}
      <div className="parent-contaner">
        <div className="slider-container">
          <Slider {...settings}>
            {/* <div className="center-productpage"> */}
            {arr?.map((item, index) => (
              <div className="center-productpage">
                <img src={baseUrl + `/productpage${index + 1}.png`} />
              </div>
            ))}
            {/* </div> */}
          </Slider>
        </div>
        <div className="right-productpage">hello</div>
      </div>
    </div>
  );
};

export default ProductPage;

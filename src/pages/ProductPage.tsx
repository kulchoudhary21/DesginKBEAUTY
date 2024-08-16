import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/ProductPage.css";
import "../assets/styles/Home.css";
import { useState } from "react";
import { Rating, RatingStar as OriginalRatingStar } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faBox,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import Products, { FAQS } from "../other/Products";
import HomeBestSeller from "../component/HomeBestSeller";
const ProductPage = () => {
  const baseUrl = "../../public/images/";
  const [arr, setArr] = useState([1, 2]);
  const [isFaq, setIsFaq] = useState(-1);
  const RatingStar = ({ filled }) => {
    return (
      <OriginalRatingStar
        className={`rating-star ${filled ? "filled" : ""}`}
        filled={filled}
      />
    );
  };
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
    arrows: false,
  };
  return (
    <div>
      <div className="container">
        <div className="parent-contaner">
          <div className="left"></div>
          <div className="center">
            <div className="slider-container">
              <Slider {...settings}>
                {arr?.map((item, index) => (
                  <div className="center-productpage">
                    <img src={baseUrl + `/productpage${index + 1}.png`} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="right">
            <div className="upper">
              <div className="group1">
                <h4>A'PIEU</h4>
                <h2>
                  A'PIEU - MILK ONE PACK SHEET MASK - BANANA (NOURISHING) - 1PC
                </h2>
                <div className="rating">
                  <Rating>
                    <RatingStar filled={true} />
                    <RatingStar filled={true} />
                    <RatingStar filled={true} />
                    <RatingStar filled={true} />
                    <RatingStar filled={false} />
                  </Rating>
                  <p>({`22 reviews`})</p>
                </div>
                <div className="price">$5</div>
              </div>
              <div className="group2">
                <div className="box1">
                  <div className="count-add-minus">
                    <div className="minus">
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className="count">1</div>
                    <div className="add">
                      <FontAwesomeIcon icon={faMinus} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="group3">
                <div className="add-to-cart">
                  <button type="button" style={{ backgroundColor: "white" }}>
                    <pre>
                      {`ADD TO CART  `} &#8226; {`  $4`}
                    </pre>
                  </button>
                </div>
              </div>
              <div className="group4">
                <div className="but-it-now">
                  <button type="button">BUY IT NOW</button>
                </div>
              </div>
              <div className="group5">
                <div className="fav-icon">
                  <FontAwesomeIcon icon={faHeartRegular} />
                </div>
                <div className="fav-text">ADD TO WISHLIST</div>
              </div>
            </div>
            <div className="lower">
              <div className="group6">
                <div className="list1">
                  <div className="parcel-box">
                    {/* <FontAwesomeIcon icon={faBox} /> */}
                    <img src="../../public/images/parcelBox.png" />
                  </div>
                  <div className="parcel-text">
                    Free UAE Shipping on orders above AED 100.
                  </div>
                  <div className="parcel-box-plane">
                    {" "}
                    {/* <FontAwesomeIcon icon={faTruck} /> */}
                    <img src="../../public/images/image 6.png" />
                  </div>
                </div>
                <div></div>
              </div>
              <div className="group7">
                <div className="list2">
                  <div className="parcel-box">
                    {/* <FontAwesomeIcon icon={faBox} /> */}
                    <img src="../../public/images/truckBox.png" />
                  </div>
                  <div className="parcel-text">
                    Free UAE Shipping on orders above AED 100.
                  </div>
                  <div className="parcel-box">
                    {/* <FontAwesomeIcon icon={faTruck} /> */}
                  </div>
                </div>
              </div>
              <div className="group8">
                <div className="product-details">
                  <h1>PRODUCT DETAILS</h1>
                  <h6>
                    Isntree’s range of broad spectrum sun protection products
                    are lightweight and suitable for daily use. Not only do they
                    help control skin shine, but also keep skin feeling cool and
                    comfortable. These suncreens also contain hyaluronic acid
                    which helps deliver deep hydration and strengthen the skin’s
                    moisture barrier. Available in a variety of formulations to
                    suit every skin type.{" "}
                  </h6>
                  <h6>
                    Isntree’s range of broad spectrum sun protection products
                    are lightweight and suitable for daily use. Not only do they
                    help control skin shine, but also keep skin feeling cool and
                    comfortable. These suncreens also contain hyaluronic acid
                    which helps deliver deep hydration and strengthen the skin’s
                    moisture barrier. Available in a variety of formulations to
                    suit every skin type.{" "}
                  </h6>
                </div>
              </div>
              <div className="group9">
                <div>
                  <div className="product-head">
                    <h1>Product of Korea.</h1>
                  </div>
                  {FAQS?.map((item, index) => (
                    <div className="product-faqs">
                      <div
                        className="faq-heading"
                        onClick={() => {
                          if (isFaq === index) setIsFaq(-1);
                          else setIsFaq(index);
                        }}
                      >
                        <h4>{item?.title}</h4>
                        {index === isFaq ? (
                          <div className="plus-icon">
                            <FontAwesomeIcon icon={faMinus} />
                          </div>
                        ) : (
                          <div className="plus-icon">
                            <FontAwesomeIcon icon={faPlus} />
                          </div>
                        )}
                      </div>
                      <div
                        className={
                          index === isFaq
                            ? "faq-desc faq-desc-show"
                            : "faq-desc-hide"
                        }
                      >
                        <h4>{item?.content}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mid-line">
        <hr></hr>
      </div>
      <div className="You-may-section">
        <div className="container">
          <HomeBestSeller
            data={Products?.slice(0, 4)}
            heading={"YOU MAY ALSO LIKE"}
            buttonHide={false}
          />
        </div>
      </div>
      <div className="mid-line">
        <hr></hr>
      </div>
      <div className="recently-viewed-section">
        <div className="container">
          <HomeBestSeller
            data={Products?.slice(0, 4)}
            heading={"RECENTLY VIEWED PRODUCTS"}
            buttonHide={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

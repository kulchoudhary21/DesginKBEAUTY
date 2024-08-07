import { lazy } from "react";
import "../assets/styles/Home.css";
import "../component/HomeAboutSection";
const HomeAboutSection = lazy(() => import("../component/HomeAboutSection"));
const HomeBestSeller = lazy(() => import("../component/HomeBestSeller"));
const HomeReadNow = lazy(() => import("../component/HomeReadNow"));
const HomeFollowSection = lazy(() => import("../component/HomeFollowSection"));
const Home = () => {
  return (
    <div>
      <div className="banner">
        <div>
          <img src="../../public/images/Banner.png" width={"100%"} />
        </div>
        <div className="banner-head">
          <div className="text-section">
            <div className="container">
              <div className="text-head">
                <h6>DR. CEURACLE</h6>
                <h2>Discover Dr. Ceuracle’s Vegan Kombucha Line</h2>
                <h6>
                  Vegan Product Line formulated with Kombucha Extract and Tea
                  Complex to detoxify, refine dull looking skin , detoxify and
                  provide deep hydration.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-about-section">
        <HomeAboutSection />
      </div>
      <div className="home-seller-section">
        <div className="container">
          <HomeBestSeller />
        </div>
      </div>
      <div className="home-read-now">
        <HomeReadNow />
      </div>
      <div className="home-read-now">
        <div className="container">
          <HomeFollowSection />
        </div>
      </div>
    </div>
  );
};

export default Home;

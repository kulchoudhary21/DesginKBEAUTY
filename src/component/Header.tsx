import "../assets/styles/Header.css";
import icon1 from "../../public/images/icon1.svg";
import IconsHeader from "../block/IconsHeader";
const Header = () => {
  return (
    <div className="header">
      <div className="sub-header">
        <p>FREE, FAST SHIPPING FOR ALL UAE ORDERS OVER AED 100</p>
      </div>
      <div className="main-header">
        <div className="top-header">
          <div className="head-left"></div>
          <div className="head-center">
            <img src="../../public/images/k beauty final 1.png" />
          </div>
          <div className="head-right">
            <IconsHeader />
          </div>
        </div>

        <div className="bottom-header">
          <div className="list">
            <ul>
              <li>SHOP ALL</li>
              <li>NEW BRANDS</li>
              <li>VALUE SETS</li>
              <li>BLOG</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

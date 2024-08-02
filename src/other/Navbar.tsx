import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import YImage from "../../public/youtube.webp";
import "../App.css";
const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="start">
          <div className="menu-icon">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div>
            <img src={YImage} />
          </div>
          <div>
            <img src={YImage} hidden={true} />
          </div>
        </div>
        <div className="middle">
          <div className="search">
            <div className="search-field">
              <input className="input-field" type="text" name="search" />
            </div>
            <div className="search-">dc</div>
          </div>
          <div>
            <FontAwesomeIcon icon={faMicrophone} />
          </div>
        </div>
        <div className="middle">
          <div className="search-field" hidden={true}>
            <input type="text" name="search" style={{ width: "100%" }} />
          </div>
          <div>
            <FontAwesomeIcon icon={faMicrophone} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

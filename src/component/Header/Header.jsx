import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";
import {
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";

import avt from "./../../assets/img/no-avatar.png";

function Header() {
  return (
    <>
      <div className="Header__wrapper">
        <div className="Header__inner">
          <div className="Header__left">
            <input type="text" placeholder="Search..." />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className="Header__right">
            <div className="Header__notifi">
              <FontAwesomeIcon icon={faBell} />
              <span className="Header__notifi-state"></span>
            </div>
            <div>
              <FontAwesomeIcon icon={faComment} />
            </div>

            <div className="Header__avatar">
              <img src={avt} alt="" />
              <span className="Header__avatar-state"></span>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

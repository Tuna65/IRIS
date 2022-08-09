import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";
import {
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";

import avt from "./../../assets/img/no-avatar.png";
import { useState } from "react";

function Header() {
  const [show, setShow] = useState(false);

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
            <div className="Header__avatar" onClick={() => setShow(!show)}>
              <img src={avt} alt="" />
              <span className="Header__avatar-state"></span>
              <FontAwesomeIcon icon={faCaretDown} />

              <div
                className="Header__dropdown"
                style={
                  show
                    ? { transform: "scale(1)", transformOrigin: "78% 0" }
                    : { transform: "scale(0)", transformOrigin: "78% 0" }
                }
              >
                <div className="dropdown__inner">
                  <ul>
                    <li>view profile</li>
                    <li>đăng xuất</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

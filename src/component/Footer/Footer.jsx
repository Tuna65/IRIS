import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer__wrapper">
      <div className="Footer__inner">
        <div className="Footer__left">
          <span>2022 © Phạm Anh Tuấn - All rights reserved.</span>
        </div>
        <div className="Footer__right">
          <ul className="Footer__right_list">
            <li>About</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

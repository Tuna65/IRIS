import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import SideBar from "../component/SideBar/SideBar";
import "./Layout.scss";

function Layout() {
  return (
    <div className="Layout__wrapper">
      <SideBar />
      <div className="Layout__container">
        {/* Header */}
        <header>
          <Header />
        </header>

        {/* Content */}
        <div className="content">Content</div>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Layout;

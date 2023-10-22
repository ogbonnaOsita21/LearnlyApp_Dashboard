import { useContext, useEffect, useState } from "react";
import { navigationLinks } from "../../data/data";
import { iconsImgs, personsImgs } from "../../utils/images";
import "./Sidebar.css";
import { SidebarContext } from "../../context/sidebarContext";

const Sidebar = () => {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebar-change");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);
  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="menu-icon">
        <button
          type="button"
          className="sidebar-toggler"
          onClick={() => {
            toggleSidebar();
          }}
        >
          <img src={iconsImgs.close} alt="" />
        </button>
      </div>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.avatar} alt="profile image" />
        </div>
        <div className="info-details">
          <span className="info-name">Kristen Ramos</span>
          <span className="info-email">kristen.ramos@email.com</span>
        </div>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <a
                href="#"
                className={`nav-link ${
                  navigationLink.id === activeLinkIdx ? "active" : null
                }`}
              >
                <img
                  src={navigationLink.image}
                  className="nav-link-icon"
                  alt={navigationLink.title}
                />
                <span
                  className={`nav-link-text ${
                    navigationLink.id === activeLinkIdx ? "active" : null
                  }`}
                >
                  {navigationLink.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="logout">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <img
                src={iconsImgs.logout}
                className="nav-link-icon"
                alt="Logout"
              />
              <span className="nav-link-text">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

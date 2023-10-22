import { useContext, useEffect, useRef, useState } from "react";
import "./ContentTop.css";
import { SidebarContext } from "../../context/sidebarContext";
import { iconsImgs } from "../../utils/images";

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  //=============Function to close the dropdown menu when click from outside the div ============
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button
          type="button"
          className="sidebar-toggler"
          onClick={() => {
            toggleSidebar();
          }}
        >
          <img src={iconsImgs.menu} alt="" />
        </button>
        {/* <h3 className="content-top-title">Home</h3> */}
      </div>
      <div className="content-top-right flex-container">
        <div className="content-top-msg flex-container">
          <img src={iconsImgs.sun} alt="stock Image" />
          <span className="text-gray text-sm">
            US Stock market opens in 3 hours
          </span>
        </div>
        <div className="wallet-dropdown" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="content-top-wallet"
          >
            <span>main wallet</span>
            <img src={iconsImgs.downArrow} alt="Main Wallet" />
          </button>
          {isOpen && (
            <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
              <ul>
                <li onClick={() => setIsOpen(!isOpen)}>Option 1</li>
                <li onClick={() => setIsOpen(!isOpen)}>Option 2</li>
              </ul>
            </div>
          )}
        </div>
        <div className="content-top-btns">
          <button type="button" className="notification-btn content-top-btn">
            <img src={iconsImgs.notification} alt="" />
            <span className="notification-btn-dot"></span>
          </button>
          <button type="button" className="plus-circle-btn content-top-btn">
            <img src={iconsImgs.plusCircle} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentTop;

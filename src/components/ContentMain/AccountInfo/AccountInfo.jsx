import "./AccountInfo.css";
import { iconsImgs, personsImgs } from "../../../utils/images";

const AccountInfo = () => {
  return (
    <div className="account-info">
      <div className="account-content">
        <h2 className="account-info-header">Upgrade your Account</h2>
        <div className="account-info-body">
          <div className="account-info-img">
            <img src={personsImgs.heroImg} alt="" />
          </div>
          <div className="account-info-details">
            <p>Access many other features and helpful insights</p>
            <button>
              <img src={iconsImgs.rightArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;

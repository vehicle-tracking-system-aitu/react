import { useState } from "react";
import style from "./SidebarCss.module.css";
import logoIcon from "../../ common/sidebarAssets/logoIcon.svg";
import mount from "../../ common/sidebarAssets/mount.png";
import reportIcon from "../../ common/sidebarAssets/reportIcon.svg";
import mapIcon from "../../ common/sidebarAssets/mapIcon.svg";
import settingsIcon from "../../ common/sidebarAssets/settingsIcon.svg";
import search from "../../ common/sidebarAssets/search.svg";
import slider from "../../ common/sidebarAssets/slider.svg";

const SidebarComponent = () => {
  const [isReport, setIsReport] = useState(false);

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.container__logo}>
            <div className={style.logo__img}>
              <img src={mount} alt="mount" />
            </div>
            <div className={style.logo__icon}>
              <img src={logoIcon} alt="mount" />
            </div>
          </div>

          <div className={style.sidebarContent}>
            <div
              className={`${style.cntIcon} ${style.selectedIcon} ${style.reportIcon}`}
              onClick={() => {
                setIsReport(!isReport);
              }}
            >
              <img src={reportIcon} alt="reportIcon" />
            </div>
            <div className={style.cntIcon}>
              <img src={mapIcon} alt="mapIcon" />
            </div>

            <div className={`${style.cntIcon} ${style.bottomIcon}`}>
              <img src={settingsIcon} alt="settings" />
            </div>
          </div>
        </div>
        {isReport ? <div className={`${style.sidebar__active}`}>
          <div className={`${style.sidebar__toggle}`}>
            <div className={`${style.searchbox__wrapper}`}>
              <div className={`${style.searchIcon}`}>
                <img src={search} alt="searchIcon" />
              </div>
              <input className={`${style.searchbox}`} type="text" id="search" placeholder="Search..." />
              <div className={`${style.sliderIcon}`}>
                <img src={slider} alt="sliderIcon" />
              </div>
            </div>
          </div>
        </div> : null}
      </div>
    </>
  );
};
export default SidebarComponent;

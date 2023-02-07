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
            <div className={style.reportCard__wrapper}>
              <div className={style.report__card}>
                <div className={style.report__content}>
                  <div className={style.id__wrapper}>
                    <li className={style.car__id}>Car ID</li>
                    <li className={style.id__number}>CRN-5922</li>
                  </div>
                    <div className={style.speed__wrapper}>
                      <li className={style.car__speed}>Speed</li>
                      <li className={style.speed__number}>10kph</li>
                    </div>
                  <div className={style.progress__wrapper}>
                      <div className={style.progress}>In progress</div>
                  </div>
                </div>
                <div className={style.line}></div>
                <div className={style.line2}></div>
                <div className={style.driver__wrapper}>
                    <li className={style.name}>Name Surname</li>
                  <li className={style.role}>Driver</li>
                </div>
              </div>
            </div>
          </div>
        </div> : null}
      </div>
    </>
  );
};
export default SidebarComponent;

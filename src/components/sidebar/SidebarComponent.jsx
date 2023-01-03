import { useState } from "react";
import style from "./SidebarCss.module.css";
import logoIcon from "../../ common/sidebarAssets/logoIcon.svg";
import mount from "../../ common/sidebarAssets/mount.png";
import reportIcon from "../../ common/sidebarAssets/reportIcon.svg";
import mapIcon from "../../ common/sidebarAssets/mapIcon.svg";
import settingsIcon from "../../ common/sidebarAssets/settingsIcon.svg";

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
              className={`${style.cntIcon} ${style.selectedIcon}`}
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
        {isReport ? <h1>Hello</h1> : null}
      </div>
    </>
  );
};
export default SidebarComponent;

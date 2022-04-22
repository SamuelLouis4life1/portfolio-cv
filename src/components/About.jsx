import React from "react";
import "../css/about.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import AboutImg from "../imgs/logo-removebg-preview.png";


export function About(props) {
  const { t } = props;
  return (
    <>
      {/* <Container fluid padding="0%"> */}
      <section id="about" className="about-section">
        <h1 className="about-title">{t("about.title")}</h1>

        <div className="about-container">

          <div className="about-item about-image">
            <img src={AboutImg} alt="" />
            <p className="about-img-title">{t("about.bigText1")}</p>
            <p className="about-img-subTitle">{t("about.bigText5")}<Link to={"/sampeurs"} className="link">{t("about.aboutSampeurs")}</Link></p>
          
            {/* <HashLink to="/#downloadSectionId" className="menuItem">
              {t("navbarMenu.download")}
            </HashLink> */}
          </div>



          <div className="about-item about-description">
          <h3 className="about-subTitle">{t("about.subTitle")}</h3>
            <p>{t("about.descriptionP1")}</p>
            <p>{t("about.descriptionP2")}</p>
            <p>{t("about.descriptionP3")}</p>
            <p>{t("about.descriptionP4")}</p>
          </div>

          <div className="about-item about-btn">
            <button>{t("about.aboutMeCv")}</button>
            <button>{t("about.aboutMeBtn")}</button>
            <a class="btn-7" href="#"><span>Alternate</span></a>
          </div>

        </div>

      </section>
      {/* </Container> */}
    </>
  );
}

export default withTranslation()(About);
import React from "react";
import "../css/about.css";
import "../css/button.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import AboutImg from "../imgs/logo.png";
import { HashLink } from 'react-router-hash-link';
import SmoothList from "react-smooth-list";
import $ from 'jquery';
import 'animate.css';

export function About(props) {
  const { t } = props;

  (function () {
    var words = ["Fullstack Developer", "Developer"],
      i = 0;
    setInterval(function () {
      $('#words').fadeOut(function () {
        $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
      });
    }, 5000)
  })();

  return (
    <>
      <SmoothList visible="true">
        {/* <Container fluid padding="0%"> */}
        <section id="about" className="about-section">
          <h1 className="title fw-normal">{t("about.title")}</h1>

          <div className="about-container">

            <div className="about-item about-image">
              <img src={AboutImg} alt="" />
              <p id="words" className="about-img-title">{t("about.bigText2")}</p>
              <p className="about-img-subTitle">{t("about.bigText5")}<Link to={"/sampeurs"} className="link">{t("sampeurs")}</Link></p>
            </div>

            <div className="about-item about-description">
              <h3 className="about-subTitle">{t("about.subTitle")}</h3>
              <p>{t("about.descriptionP1")}
                <Link to={"/sampeurs"} className="link"> {t("about.marriott")}</Link>
                {t("about.descriptionP2")}
                <Link to={"/sampeurs"} className="link"> {t("about.mundivox")}</Link>
                {t("about.descriptionP3")}
                <Link to={"/sampeurs"} className="link">{t("about.college")}</Link>
                {t("about.descriptionP4")}
              </p>

              <p>{t("about.descriptionP5")} <HashLink to="/#contact" className="link"> {t("about.contact")} </HashLink></p>

              <p>{t("about.descriptionP6")}</p>

              <div className="about-item about-btn">
              <button class="blob-btn">
              {t("about.aboutMeBtn")}                  
              <span class="blob-btn__inner">
                    <span class="blob-btn__blobs">
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                    </span>
                  </span>
                </button>
                <button class="blob-btn">
                {t("about.aboutMeCv")}
                  <span class="blob-btn__inner">
                    <span class="blob-btn__blobs">
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>

        </section>
      </SmoothList>
      {/* </Container> */}
    </>
  );
}

export default withTranslation()(About);
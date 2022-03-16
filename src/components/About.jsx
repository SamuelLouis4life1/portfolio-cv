import React from "react";
import "../css/about.css";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";


export function About  (props) {
  const { t } = props;
  return (
    <>
      <Container fluid padding="0%">
        <section id="about" className="about-section">
          <div className="container">
          <h1 className="about-description">{t("about.description")}</h1>
          </div>
        </section>
      </Container>
    </>
  );
}

export default withTranslation()(About);

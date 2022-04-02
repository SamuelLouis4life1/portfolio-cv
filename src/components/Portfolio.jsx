import React, { Component } from 'react';
import '../css/portfolio.css'
import { withTranslation } from "react-i18next";


export function Portfolio (props) {
    const { t } = props;

    return (

        <section className="portfolio-setion">

            <div className="portfolio-description">

                <h5> {t("portfolio.description")} </h5>
            </div>

        </section>
    );
}

export default withTranslation()(Portfolio);
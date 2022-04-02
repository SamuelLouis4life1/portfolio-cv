import React, { Component } from 'react';
import '../css/services.css'
import { withTranslation } from "react-i18next";

export function Services (props) {
    const { t } = props;    

    return (

        <section className="services-setion">

            <div className="services-description">

                <h5>{t("services.description")} </h5>
            </div>

        </section>
    );
}

export default withTranslation()(Services);
import React, { Component } from 'react';
import '../css/services.css'
import { withTranslation } from "react-i18next";



export function Services  (props) {
    const { t } = props;
    

    return (

        <header className="home">

            <div className="home-description">

                <h5>{t("home.hi")}</h5>
                <h1>{t("home.name")}</h1>
                <h5>Fullstack Developer</h5>
                <p>{t("home.belief")}<a href="#" className="">bible verse</a> </p>
            </div>

        </header>
    );
}

export default withTranslation()(Services);

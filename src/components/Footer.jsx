import React, { Component } from 'react';
import '../css/footer.css'
import { withTranslation } from "react-i18next";

export function Footer(props) {
    const { t } = props;


    return (
        <section className="footer-section" id='footer'>

            <div>
                <h1 className="footer-description">{t("footer.description")} </h1>
            </div>

        </section>
    );
}

export default withTranslation()(Footer);
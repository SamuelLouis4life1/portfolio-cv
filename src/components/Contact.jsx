import React from "react";
import { withTranslation } from "react-i18next";
import "../css/contact.css"

export function Contact (props) {
    const { t } = props;

    return (
        <section className="contact-section">
            <div className="contact-description">
                <h1>{t("contact.description")}</h1>
            </div>

        </section>


    );
}

export default withTranslation()(Contact);
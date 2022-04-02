import React from "react";
import { withTranslation } from "react-i18next";
import "../css/skills.css"


export function Skills (pros) {
    const { t } = pros 

    return (
        <section className="skills-section" id="skills">

            <div>
                <h1 className="skills-description">{t("skills.description")}</h1>
            </div>

        </section>


    );
}

export default withTranslation()(Skills);
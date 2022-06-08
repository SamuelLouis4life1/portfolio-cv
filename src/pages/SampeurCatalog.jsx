import React, { Component } from 'react';
import '../css/sampeurCatalog.css'
import { withTranslation } from "react-i18next";

export function SampeurCatalog() {
    const date = new Date().getFullYear();

    return (
        <section className="sampeur-catalog-section" id='SampeurCatalog'>


            <div className="sampeur-catalog-content">
                <div className="sampeur-catalog-logo footer-items">
                    {/* <img className="footer-img" src={FooterLogo} alt="" /> */}
                </div>

                <div className="footer-right-reserve footer-items">
                    <p class="copyright-text">Copyright &copy; {date} All Rights Reserved by <a href="#">Samuel Louis Sampeur</a>.</p>
                </div>



            </div>

        </section>
    );
}

export default withTranslation()(SampeurCatalog);
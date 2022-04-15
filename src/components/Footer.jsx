import React, { Component } from 'react';
import '../css/footer.css'
import { withTranslation } from "react-i18next";
import SocialMidia from "./SocialMedia";
import "../imgs/home_img.jpg";
import FooterLogo from "../imgs/logo-removebg-preview.png";

export function Footer() {
    const date = new Date().getFullYear();

    return (
        <section className="footer-section" id='footer'>
            <div className="footer-line">

            </div>

            <div className="footer-content">
                <div className="footer-logo footer-items">
                    <img className="footer-img" src={FooterLogo} alt="" />
                </div>

                <div className="footer-right-reserve footer-items">
                    <p class="copyright-text">Copyright &copy; {date} All Rights Reserved by <a href="#">Samuel Louis Sampeur</a>.</p>
                </div>

                <div className="footer-social-media footer-items">
                    <SocialMidia />
                </div>

            </div>

        </section>
    );
}

export default withTranslation()(Footer);
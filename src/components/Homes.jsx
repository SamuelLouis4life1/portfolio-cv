import React from "react";
import "../App.css";
import NavbarMenu from './Nav';
import Header from './Home';
import About from './About';
import Services from './Services';
import Skills from './Skills';
import Experiences from './Experiences';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
// import ScrollToTop from "./components/ScrollToTop";
import SampeurCatalog from "../pages/SampeurCatalog";
import BackToTopButton from "./BackToTopBtn";
// import Main from "./main";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



export default function Homes() {
    return (
        <>
            <Header />
            {/* <Main> */}
                <NavbarMenu />
                {/* <Header /> */}
                <About />
                <Skills />
                <Experiences />
                <Services />
                <Portfolio />
                <Contact />
                <Footer />
                <BackToTopButton></BackToTopButton>
            {/* </Main> */}
        </>
    );
}
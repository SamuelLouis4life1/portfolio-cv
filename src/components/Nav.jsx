import React from "react";
import "../css/nav.css"
import { useState } from "react";


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <header class="header">
        <a href="" class="logo">Logo</a>

        <div class="menuToggle"></div>

        <nav class="nav">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a data-toggle="modal" data-target="#blog_modal" href="#">Blog</a></li>
                <li><a data-toggle="modal" data-target="#services" href="#">Services</a></li>
                <li><a data-toggle="modal" data-target="#freelancer" href="#">Freelancer</a></li>
                <li><a data-toggle="modal" data-target="#ourTeam" href="#">Our Team</a></li>
                <li><a data-toggle="modal" data-target="#location" href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Nav
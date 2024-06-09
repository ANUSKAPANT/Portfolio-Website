import { useEffect } from "react";
import "./header.css";
import SideNav from "../sidenav/sidenav";
import * as React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
        window.addEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const header = document.querySelector(".header");
        // scrollTop >= 80 ? header?.classList.add("is-sticky") :  header?.classList.remove("is-sticky");
        // if(header) {
            if( scrollTop >= 80 ) {
                header.classList.add("is-sticky");
            } else {
                header.classList.remove("is-sticky");
            }
        // }
    };

    return (
        <header className="header">
        <div className="inner">
            <div className="burger" />
            <nav>
            <AnchorLink className="active" href="#image">
                Home
            </AnchorLink>
            <AnchorLink href="#skills">Skills</AnchorLink>
            <AnchorLink href="#projects">Projects</AnchorLink>
            <AnchorLink href="#timeline">Timeline</AnchorLink>
            </nav>
            <AnchorLink href="#resume" className="resume">
            Resume
            </AnchorLink>
        </div>
        <SideNav />
        </header>
    );
};

export default Header;

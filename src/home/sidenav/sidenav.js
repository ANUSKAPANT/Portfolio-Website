import * as React from "react";
import './sidenav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";

const SideNav = () => {
    return (
        <>
            <div id="mySidenav" className="sidenav">
                <button id="linkedIn" className="button" onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://www.linkedin.com/in/anuska-pant/';
                }}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </button>
                <button id="instagram" className="button"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='mailto:anuska.pant@gmail.com';
                        }}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </button>
                <button id="facebook" className="button"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='tel:3478185881';
                        }}>
                    <FontAwesomeIcon icon={faPhone} />
                </button>
                <button id="github" className="button" onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://github.com/ANUSKAPANT';
                }}>
                    <FontAwesomeIcon icon={faGithub} />
                </button>
        </div>
        </>
    );
}

export default SideNav;
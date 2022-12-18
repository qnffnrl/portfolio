/* eslint-disable */
import React from 'react';
import { Link } from "react-router-dom"
function Nav(props) {
    return (
        <div className="nav">
            <div className="nav-left">
                <ul>
                    <li>
                        <Link className="link" to="/Home">
                            <img id="home" src="icons/icon-home.png"/>
                            <p className="nav-name">Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/About">
                            <img id="about" src="icons/icon-about.png"/>
                            <p className="nav-name">About Me</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/Activity">
                            <img id="activity" src="icons/icon-activity.png"/>
                            <p className="nav-name">Activity</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/Portfolio">
                            <img id="portfolio" src="icons/icon-portfolio.png"/>
                            <p className="nav-name">Portfolio</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/Contact">
                            <img id="contact" src="icons/icon-contact.png"/>
                            <p className="nav-name">Contact</p>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="nav-right">
                <div>
                    <div className="profileImage"></div>
                    <p className="name">안 효 원</p>
                    <p className="to-be">@risker</p>
                    <div className="social">
                        <ul>
                            <li><a href="https://github.com/qnffnrl"><img src="icons/icon-github.png"/></a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className="copy">&copy; 2022 risker all right reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Nav;
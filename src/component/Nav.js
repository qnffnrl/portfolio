/* eslint-disable */
import React from 'react';
import { Link } from "react-router-dom"

function Nav(props) {
    return (
        <div className="nav">
            <div className="nav-left">
                <ul>
                    <li>
                        <Link className="link" to="/">
                            <img id="home" src={process.env.PUBLIC_URL + "/icons/icon-home.png"}/>
                            <p className="nav-name"><span className="n">Home</span></p>
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/About">
                            <img id="about" src={process.env.PUBLIC_URL + "/icons/icon-about.png"}/>
                            <p className="nav-name"><span className="n">About Me</span></p>
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/Activity">
                            <img id="activity" src={process.env.PUBLIC_URL + "/icons/icon-activity.png"}/>
                            <p className="nav-name"><span className="n">Activity</span></p>
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/Folio">
                            <img id="portfolio" src={process.env.PUBLIC_URL + "/icons/icon-portfolio.png"}/>
                            <p className="nav-name"><span className="n">Folio</span></p>
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/Contact">
                            <img id="contact" src={process.env.PUBLIC_URL + "/icons/icon-contact.png"}/>
                            <p className="nav-name"><span className="n">Contact</span></p>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="nav-right">
                <div>
                    <div className="profileImage"></div>
                    <p className="name">안 효 원</p>
                    <p className="to-be"><span className="gradient">@risker</span></p>
                    <div className="social">
                        <ul>
                            <li><a href="https://github.com/qnffnrl"><img src={process.env.PUBLIC_URL + "/icons/icon-github.png"}/></a></li>
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
/* eslint-disable */
import React from 'react';

function AboutMe(props) {
    return (
        <div className="back">
            <div className="wrapper about-wrapper">
                <div id="div-aboutMe">
                    <p className="title font-size-big"><span className="gradient">@About</span> Me</p>
                    <div id="content">
                        <div id="content-left">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt doloribus ea explicabo facilis, fugiat harum laboriosam magni perferendis quam quibusdam, ratione saepe vero. Beatae consequuntur illum necessitatibus quis tenetur.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis corporis deleniti doloribus dolorum earum eius enim esse facere ipsam iste minus mollitia necessitatibus perferendis saepe, tempore tenetur voluptate voluptatum.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam aliquid, amet autem distinctio dolor enim eum exercitationem ipsam labore modi nihil, nisi quae quod, rem sed velit voluptatibus.
                        </div>
                        <div id="content-right">
                            <ul>
                                <li><span className="gradient bold">Age</span>  <span>25</span></li>
                                <li><span className="gradient bold">Area</span>  <span>Seoul / Gyeonggi / Incheon</span></li>
                                <li><span className="gradient bold">e-mail</span> <span>roakfwk30@naver.com</span></li>
                                <li><span className="gradient bold">Phone</span> <span>010-5635-5918</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="div-whatICanDo">
                    <p className="title font-size-middle"><span className="gradient">@What</span> I Can Do</p>
                    <div id="canDoIt-top">
                        <div className="canDoIt">
                            <img src="icons/icon-programming.png"/>
                            <p className="doIt-title">Programming</p>
                            <p className="doIt-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur debitis distinctio earum ex hic, magnam magni maxime minima minus necessitatibus, odit omnis perferendis quam repudiandae veritatis vitae voluptate.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur debitis distinctio earum ex hic, magnam magni maxime minima minus necessitatibus, odit omnis perferendis quam repudiandae veritatis vitae voluptate.
                            </p>
                        </div>
                        <div className="canDoIt">
                            <img src="icons/icon-linux.png"/>
                            <p className="doIt-title">Linux / Network</p>
                            <p className="doIt-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur debitis distinctio earum ex hic, magnam magni maxime minima minus necessitatibus, odit omnis perferendis quam repudiandae veritatis vitae voluptate.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur debitis distinctio earum ex hic, magnam magni maxime minima minus necessitatibus, odit omnis perferendis quam repudiandae veritatis vitae voluptate.
                            </p>
                        </div>
                    </div>
                    <div id="canDoIt-bottom">
                        <div className="canDoIt">
                            <img src="icons/icon-frontEnd.png"/>
                            <p className="doIt-title">Front-End</p>
                            <p className="doIt-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur debitis distinctio earum ex hic, magnam magni maxime minima minus necessitatibus, odit omnis perferendis quam repudiandae veritatis vitae voluptate.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur debitis distinctio earum ex hic, magnam magni maxime minima minus necessitatibus, odit omnis perferendis quam repudiandae veritatis vitae voluptate.
                            </p>
                        </div>
                        <div className="canDoIt">
                            <img src="icons/icon-backend.png"/>
                            <p className="doIt-title">Back-End</p>
                            <p className="doIt-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur debitis distinctio earum ex hic, magnam magni maxime minima minus necessitatibus, odit omnis perferendis quam repudiandae veritatis vitae voluptate.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur debitis distinctio earum ex hic, magnam magni maxime minima minus necessitatibus, odit omnis perferendis quam repudiandae veritatis vitae voluptate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
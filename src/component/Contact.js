/* eslint-disable */
import React from 'react';
import ContactCard from "./ContactCard";
import Map from "./Map";

function Contact(props) {
    return (
        <div className="back">
            <div className="wrapper d-flex flex-direction-column">
                <p id="contact-title"><span className="title font-size-big gradient">@Contact</span></p>
                <div id="contact-content" className="w-100 d-flex">
                    <div id="contact-left" className="d-flex flex-direction-column w-35">
                        <ContactCard iconPath={"icons/icon-gps.png"} text={"Gwangju, Korea"}></ContactCard>
                        <ContactCard iconPath={"icons/icon-phone.png"} text={"010-5635-****"}></ContactCard>
                        <ContactCard iconPath={"icons/icon-mail.png"} text={"roakfwk30@naver.com"}></ContactCard>
                    </div>
                    <div id="contact-right" className="d-flex flex-direction-column w-60">
                        <Map></Map>

                        <div id="div-profile" className="d-flex justify-content-center align-items-center">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="d-flex flex-direction-column justify-content-center align-items-center">
                                    <p className="gradient bold">Back-End Developer</p>
                                    <img src="images/risker_profile.png"/><br/>
                                    <p><span className="gradient">@risker</span></p>
                                </div>
                                <div className="d-flexalign-items-center">
                                    <div className="font-size-small text-left">
                                        <p><span className="gradient">ㆍGwangJu University</span></p><br/>
                                        <p><span className="gradient">ㆍDept. Convergence Software</span></p><br/>
                                        <p><span className="gradient">ㆍrisker's React portfolio project</span></p><br/>
                                        <p><span className="gradient">ㆍ2022.12.25</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
/* eslint-disable */
import React from 'react';
import TypeIt from "typeit-react";

function Home(props) {
    return (

        <>
            <div className="home">
                <div>
                    <p>
                        <TypeIt
                            getBeforeInit={(instance) => {
                                instance.pause(500).type("Hello! I'm risker ")
                                    .pause(1200)
                                        .type("and..")
                                    .pause(1500)
                                        .delete(23)
                                    .pause(1000)
                                        .type("Trouble Shooter <img id='gun' src='icons/icon-gun.png'/> ");
                                return instance;
                            }}
                        />
                    </p>
                    <p><span className="gradient">안효원의 포트폴리오</span></p>
                    <p>Back-End Developer</p>
                </div>
            </div>
            <p className="comment">This page is optimized for 1080p or higher</p>
        </>

);
}

export default Home;
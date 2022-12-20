/* eslint-disable */
import React from 'react';
import Gauge from "./Gauge";
import Timeline from "./Timeline";

function Activity(props) {
    return (
        <div className="back">
            <div className="wrapper">
                <p className="title font-size-big"><span className="gradient">@Activity</span></p>
                <div id="activity-content" className="d-flex">
                    <div id="activity-content-left" className="d-flex flex-direction-column">
                        <p className="sub-title">Education</p>
                        <ul className="timeline">
                            <Timeline data="2017.02 ~ 2023.02" title="광주대학교" content="융합소프트웨어학과 4.11 / 4.5"/>
                            <Timeline data="2022.07" title="단기집중" content="내용"/>
                            <Timeline data="2022.07" title="단기집중" content="내용"/>
                        </ul>

                        <p className="sub-title">Experience</p>
                        <ul className="timeline">
                            <Timeline data="2023.07" title="단기집중" content="내용"/>
                            <Timeline data="2022.07" title="단기집중" content="내용"/>
                            <Timeline data="2022.07" title="단기집중" content="내용"/>
                        </ul>

                        <p className="sub-title">Project</p>
                        <ul className="timeline">
                            <Timeline data="2023.07" title="단기집중" content="내용"/>
                            <Timeline data="2022.07" title="단기집중" content="내용"/>
                            <Timeline data="2022.07" title="단기집중" content="내용"/>
                        </ul>

                    </div>
                    <div id="activity-content-right" className="d-flex flex-direction-column">
                        <div className="d-flex flex-direction-column">
                            <p className="sub-title">Coding <span className="gradient">Skills</span></p>
                            <Gauge title="Java" percentage=" w-80"></Gauge>
                            <Gauge title="Python" percentage=" w-75"></Gauge>
                            <Gauge title="C" percentage=" w-50"></Gauge>
                            <Gauge title="Python" percentage=" w-75"></Gauge>

                            <p className="sub-title">Back-End <span className="gradient">Skills</span></p>
                            <Gauge title="SpringBoot" percentage=" w-75"></Gauge>
                            <Gauge title="JSP" percentage=" w-65"></Gauge>
                            <Gauge title="PHP" percentage=" w-60"></Gauge>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activity;
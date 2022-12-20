/* eslint-disable */
import React from 'react';
import Gauge from "./Gauge";
import Timeline from "./Timeline";

function Activity(props) {
    return (
        <div className="back">
            <div className="wrapper">
                <div className="d-flex w-100">
                    <p className="w-50 title font-size-big"><span className="gradient">@Activity</span></p>
                    <p id="skills" className="title font-size-big"><span className="gradient">@</span><span className="gradient under-dotted-line">Skills</span></p>
                    <div id="hover-text" className="text-center">
                        <p className="bold gradient">* Percentage</p>
                        <p>70% &lt;=  업무에서 사용해요  &lt;= 100%</p>
                        <p>50% &lt;=  공부가 조금 필요해요  &lt; 70%</p>
                    </div>
                </div>
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
                            <p className="sub-title">Back-End <span className="gradient">Skills</span></p>
                            <Gauge title="SpringBoot" percentage=" w-80"></Gauge>
                            <Gauge title="JSP" percentage=" w-70"></Gauge>
                            <Gauge title="PHP" percentage=" w-65"></Gauge>
                            <Gauge title="Mysql" percentage=" w-85"></Gauge>

                            <p className="sub-title">Coding <span className="gradient">Skills</span></p>
                            <Gauge title="Java" percentage=" w-85"></Gauge>
                            <Gauge title="Python" percentage=" w-75"></Gauge>

                            <p className="sub-title">Front-End <span className="gradient">Skills</span></p>
                            <Gauge title="HTML5, CSS3" percentage=" w-90"></Gauge>
                            <Gauge title="Vanilla JS" percentage=" w-70"></Gauge>
                            <Gauge title="React JS" percentage=" w-65"></Gauge>

                            <p className="sub-title">Server / Infra <span className="gradient">Skills</span></p>
                            <Gauge title="CentOS 7" percentage=" w-90"></Gauge>
                            <Gauge title="Ubuntu 22.04" percentage=" w-80"></Gauge>
                        </div>

                        <div className="d-flex flex-direction-column">
                            <p className="sub-title"><span className="gradient">@Tech</span> Stack / Tools</p>
                            <div className="d-flex tech-stack techs">
                                <div className="stack">Spring Data JPA</div><div className="stack">Spring Security</div>
                                <div className="stack">Hibernate</div><div className="stack">Jenkins</div>
                                <div className="stack">MariaDB</div><div className="stack">PHP</div>
                                <div className="stack">JSP</div><div className="stack">Git</div>
                            </div>
                            <div className="d-flex tech-stack techs">
                                <div className="stack">REST API</div><div className="stack">Apache POI</div>
                                <div className="stack">Apache</div><div className="stack">JSP</div>
                                <div className="stack">CentOS</div><div className="stack">Ubuntu</div>
                                <div className="stack">Apache tomcat</div><div className="stack">Github</div>
                            </div>
                            <div className="d-flex tech-stack techs">
                                <div className="stack">HTML</div><div className="stack">CSS</div><div className="stack">React</div>
                                <div className="stack">Javascript</div><div className="stack">Mustache</div><div className="stack">Java Servlet</div>
                                <div className="stack">TTS</div><div className="stack">Flask</div><div className="stack">MySQL</div>
                            </div>
                            <div className="d-flex tech-stack tools">
                                <div className="stack">IntellJ</div><div className="stack">Webstorm</div><div className="stack">vsCode</div>
                                <div className="stack">NaviCat</div><div className="stack">HeidiSQL</div><div className="stack">MobaXterm</div>
                                <div className="stack">PhpStorm</div>
                            </div>
                            <div className="d-flex tech-stack tools">
                                <div className="stack">VMware</div><div className="stack">Jupyter Notebook</div>
                            </div>
                        </div>

                    </div>
                </div>
                
                {/* 자격증, 수상 */}
                
            </div>
        </div>
    );
}

export default Activity;
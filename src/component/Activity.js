/* eslint-disable */
import React from 'react';
import Gauge from "./Gauge";
import Timeline from "./Timeline";

function Activity(props) {
    return (
        <div className="back">
            <div className="wrapper">
                <div id="scroll" className="d-flex flex-direction-column justify-content-center align-items-center">
                    <p>Scroll Down!</p>
                    <span className="gradient bold">↓↓↓</span>
                </div>
                <div className="d-flex w-100">
                    <p id="activity-min-width" className="w-50 title font-size-big"><span className="gradient">@Activity</span></p>
                    <p id="skills" className="title font-size-big"><span className="gradient">@</span><span className="gradient under-dotted-line">Skills</span></p>
                    <div id="hover-text" className="text-center">
                        <p className="bold"><span className="gradient">* Percentage</span></p>
                        <p>70% &lt;=  업무에서 사용해요  &lt;= 100%</p>
                        <p>50% &lt;=  공부가 조금 필요해요  &lt; 70%</p>
                        <p>0% &lt;=  공부가 조금 더 필요해요  &lt; 50%</p>
                    </div>
                </div>
                <div id="activity-content" className="d-flex">
                    <div id="activity-content-left" className="d-flex flex-direction-column">
                        <p className="sub-title">Education</p>
                        <ul className="timeline">
                            <Timeline data="2017.02 ~ 2023.02" title="광주대학교" content="융합소프트웨어학과 4.15 / 4.5"/>
                            <Timeline data="2020.08 ~ 2020.08" title="한국정보통신교육원" content="IoT 융합서비스를 위한 SW개발 응용과정"/>
                            <Timeline data="2020.09 ~ 2020.09" title="한국정보통신교육원" content="객체지향개발자(JAVA) 개발자 기초과정"/>
                            <Timeline data="2021.01 ~ 2021.01" title="㈜휴인스" content="NVIDIA 보드를 활용한 인공지능 알고리즘 기초 과정"/>
                            <Timeline data="2021.01 ~ 2021.01" title="㈜으뜸정보기술 - TBIT" content="AWS 101 Hands on Lab"
                            content2={"Amazon Web Services 사용법"}/>
                            <Timeline data="2021.03 ~ 2021.04" title="한국정보통신교육원" content="스마트그리드 기반 SW개발자 기본/실무역량 강화"/>
                            <Timeline data="2021.08 ~ 2021.08" title="한국정보통신교육원" content="AIoT 융합서비스를 위한 웹개발자 양성 과정"/>
                        </ul>

                        <p className="sub-title">Experience</p>
                        <ul className="timeline">
                            <Timeline data="2021.06 ~ 2021.07" title="현네트워크(주)" content="2021 여름학기 광주대 LINC+ 사업단 PBL현장실습"
                            content2={"Java, Spring Framework를 활용한 웹 게시판 제작"}/>
                            <Timeline data="2021.12 ~ 2022.02" title="(주)디유" content="2021 겨울학기 광주대 LINC+ 사업단 PBL현장실습"
                            content2={"JSP를 활용한 Web Program 구현"}/>
                            <Timeline data="2022.11 ~ 2022.12" title="(주)BA Energy" content="홈페이지 제작 용역"
                            content2={"배터리 모니터링 페이지 제작"}/>
                        </ul>

                        <p className="sub-title">Project</p>
                        <ul className="timeline">
                            <Timeline data="2020.09 ~ 2020.12" title="머신러닝을 활용한 위험인지 CCTV" content="광주대학교 LINC+ 사업단"
                            content2={"LINC+ 지역산업 수요 맞춤형 인재양성 프로그램"}/>
                            <Timeline data="2020.09 ~ 2021.01" title="머신러닝을 활용한 어린이 안전관리 시스템" content="광주대학교 창업교육혁신센터"
                            content2={"2020 GU-창업동아리"}/>
                            <Timeline data="2021.04 ~ 2021.11" title="딥러닝 기반 스마트 홈 전력예측 시스템" content="한이음"
                            content2={"2021년 한이음 ICT멘토링 프로젝트"}/>
                            <Timeline data="2021.07 ~ 2021.12" title="딥러닝 기반 스마트 콘센트" content="광주대학교 창업지원단"
                            content2={"2021 프로젝트 창업동아리"}/>
                            <Timeline data="2021.09 ~ 2021.11" title="인공지능 기반 스마트 콘센트" content="전남대학교"
                            content2={"2021 광주ㆍ전남 공동혁신도시 OpenLAB 조성사업 창업동아리"}/>
                        </ul>
                    </div>
                    <div id="activity-content-right" className="d-flex flex-direction-column">
                        <div className="d-flex flex-direction-column">
                            <p className="sub-title">Back-End <span className="gradient">Skills</span></p>
                            <Gauge title="SpringBoot" percentage=" w-80"></Gauge>
                            <Gauge title="JSP" percentage=" w-70"></Gauge>
                            <Gauge title="PHP" percentage=" w-65"></Gauge>
                            <Gauge title="NodeJS" percentage=" w-40"></Gauge>

                            <p className="sub-title">Coding <span className="gradient">Skills</span></p>
                            <Gauge title="Java" percentage=" w-85"></Gauge>
                            <Gauge title="Python" percentage=" w-75"></Gauge>

                            <p className="sub-title">Front-End <span className="gradient">Skills</span></p>
                            <Gauge title="HTML5, CSS3" percentage=" w-90"></Gauge>
                            <Gauge title="Vanilla JS" percentage=" w-70"></Gauge>
                            <Gauge title="React JS" percentage=" w-65"></Gauge>

                            <p className="sub-title">Server / Infra <span className="gradient">Skills</span></p>
                            <Gauge title="CentOS 7" percentage=" w-90"></Gauge>
                            <Gauge title="Ubuntu 22.04" percentage=" w-70"></Gauge>
                        </div>

                        <div className="d-flex flex-direction-column mt-50px">
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
                                <div className="stack">IntelliJ</div><div className="stack">Webstorm</div><div className="stack">vsCode</div>
                                <div className="stack">NaviCat</div><div className="stack">HeidiSQL</div><div className="stack">MobaXterm</div>
                                <div className="stack">PhpStorm</div>
                            </div>
                            <div className="d-flex tech-stack tools">
                                <div className="stack">VMware</div><div className="stack">Jupyter Notebook</div>
                            </div>
                        </div>

                        <p id="last-title-before" className="title font-size-big"><span className="gradient">@Award</span> history</p><br/>
                        <div className="d-flex justify-content-around">
                            <div className="scale">
                                <img className="img-award" src={process.env.PUBLIC_URL + "/images/activity/award-1.jpg"}/>
                            </div>
                            <div className="scale">
                                <img className="img-award" src={process.env.PUBLIC_URL + "/images/activity/award-2.jpg"}/>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="d-flex justify-content-around">
                            <div className="scale">
                                <img className="img-award" src={process.env.PUBLIC_URL + "/images/activity/award-3.jpg"}/>
                            </div>
                            <div className="scale">
                                <img className="img-award" src={process.env.PUBLIC_URL + "/images/activity/award-4.jpg"}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-direction-column">

                    <p id="last-title" className="title font-size-big"><span className="gradient">@Certificate</span></p>
                    <div id="last-div" className="d-flex">
                        <div className="scale5"><img className="img-certi" src={process.env.PUBLIC_URL + "/images/activity/certi-1.jpg"}/></div>
                        <div className="scale"><img className="img-certi" src={process.env.PUBLIC_URL + "/images/activity/certi-2.jpg"}/></div>
                        <div className="scale"><img className="img-certi" src={process.env.PUBLIC_URL + "/images/activity/certi-3.jpg"}/></div>
                        <div className="scale"><img className="img-certi" src={process.env.PUBLIC_URL + "/images/activity/certi-4.jpg"}/></div>
                        <div className="scale"><img className="img-certi" src={process.env.PUBLIC_URL + "/images/activity/certi-5.jpg"}/></div>
                        <div className="scale"><img className="img-certi" src={process.env.PUBLIC_URL + "/images/activity/certi-6.jpg"}/></div>
                        <div className="scale"><img className="img-certi" src={process.env.PUBLIC_URL + "/images/activity/certi-7.jpg"}/></div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Activity;
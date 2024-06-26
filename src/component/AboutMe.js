/* eslint-disable */
import React from 'react';

function AboutMe(props) {
    return (
        <div className="back">
            <div id="overflow-x-hidden" className="wrapper about-wrapper">
                <div id="div-aboutMe">
                    <p className="title font-size-big"><span className="gradient">@About</span> Me</p>
                    <div id="content">
                        <div id="content-left">
                            <p className="introduce"><span className="font-size-small">ㆍ</span><span className="gradient bold">해결사</span>가 되고 싶은 개발자 안효원 입니다</p>
                            <p className="introduce font-size-small">ㆍ개발도중 생겨나는 문제들에 대해서 원인을 파악하고,</p>
                            <p className="introduce font-size-small"><span className="d-none">ㆍ</span>하나하나 문제를 해결해 나가는 과정들을 좋아하는 자칭, <span className="gradient bold">Trouble Shooter</span> 입니다</p>
                            <p className="introduce font-size-small">ㆍ안되는 건 다 뜯어고쳐 보고 싶은 <span className="gradient">공돌이</span> 입니다</p>
                            <p className="introduce font-size-small">ㆍ<span className="gradient bold">Java</span>와 <span className="gradient bold">Linux</span>를 좋아하는 벡엔드 개발자 입니다 :)</p>
                        </div>
                        <div id="content-right">
                            <ul>
                                <li><span className="gradient bold">Age</span> <span>26</span></li>
                                <li><span className="gradient bold">Area</span> <span>Seoul / Gyeonggi / Yongin</span></li>
                                <li><span className="gradient bold">e-mail</span> <span>roakfwk30@naver.com</span></li>
                                <li><span className="gradient bold">Phone</span> <span>010-5635-****</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="div-whatICanDo">
                    <p className="title font-size-middle"><span className="gradient">@What</span> I Can Do</p>
                    <div id="canDoIt-top">
                        <div className="canDoIt">
                            <img src={process.env.PUBLIC_URL + "/icons/icon-backend.png"}/>
                            <p className="doIt-title">Back-End</p>
                            <p className="doIt-content">
                                ㆍJava 진영의 웹 프레임워크인 <span className="gradient">Springboot</span>를 사용합니다 <br/>
                                ㆍ교내외 프로젝트에서 웹 개발 파트를 다수 맡아 <br/>
                                <span className="d-none">ㆍ</span>MariaDB(MySQL) 연동을 통한 CRUD를 구현한 경험이 많습니다
                            </p>
                        </div>
                        <div className="canDoIt">
                            <img src={process.env.PUBLIC_URL + "/icons/icon-linux.png"}/>
                            <p className="doIt-title">Linux / Infra</p>
                            <p className="doIt-content">
                                ㆍ개발자는 <span className="gradient">서비스업</span>이라고 생각합니다 <br/>
                                <span className="d-none">ㆍ</span>로컬 환경에서의 개발은 의미가 없다고 생각합니다 <br/>
                                <span className="d-none">ㆍ</span>서비스가 배포되어 사용자에게 까지 갔을 때 진정한 개발이라고 생각하여 <br/>
                                <span className="d-none">ㆍ</span>배포가 이루어지는 <span className="gradient">서버/인프라</span> 지식이 중요하다고 생각합니다 <br/>
                                ㆍ개인 서버를 운영해 개발한 모든 서비스를 배포할려고 노력하고 있습니다
                            </p>
                        </div>

                    </div>
                    <div id="canDoIt-bottom">
                        <div className="canDoIt">
                            <img src={process.env.PUBLIC_URL + "/icons/icon-frontEnd.png"}/>
                            <p className="doIt-title">Front-End</p>
                            <p className="doIt-content font-size-small">
                                ㆍBack-End 개발자라고 해서 Front-End를 모르는건 옳지 않다고 생각합니다 <br/>
                                <span className="d-none">ㆍ</span>Front를 알면 Front 개발자의 입장을 알 수 있을테고, Front 개발자의 입장을 알면 <br/>
                                <span className="d-none">ㆍ</span>Front/Back-End 개발자간의 원활한 소통을 통해 좋은 협업을 할 수 있다고 생각합니다 <br/>
                                ㆍ그래서 Front와 Back-End 간의 데이터 통신을 공부하고, <br/>
                                <span className="d-none">ㆍ</span><span className="gradient">React</span>를 활용하여 본 포트폴리오를 제작하고 있습니다
                            </p>
                        </div>
                        <div className="canDoIt">
                            <img src={process.env.PUBLIC_URL + "/icons/icon-programming.png"}/>
                            <p className="doIt-title">Programming</p>
                            <p className="doIt-content">
                                ㆍ대학을 다니면서 여러가지 프로그래밍 언어를 접해보았는데, <br/>
                                <span className="d-none">ㆍ</span>그 중에서 <span className="gradient">Java</span> 언어가 가장 재미 있었습니다 <br/>
                                ㆍJava의 <span className="gradient">객체 지향</span>이라는 어려운 개념이 맨 처음에는 저를 힘들게 했지만, <br/>
                                <span className="d-none">ㆍ</span>그런 어려운 개념을 점점 내 것으로 만들면서 공부하다 보니 <br/>
                                <span className="d-none">ㆍ</span>가장 좋아하는 언어가 Java가 되어 있었습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
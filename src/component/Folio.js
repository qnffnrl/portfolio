import React from 'react';
import PortfolioCard from "./PortfolioCard";
function Folio(props) {



    return (
        <div className="back">
            <div className="wrapper d-flex flex-direction-column">
                <p className="w-100 title font-size-big"><span className="gradient">@Portfolio</span></p>
                <div className="d-flex card-wrap">

                    <PortfolioCard numbering={1} headerName={"PHP 웹 게시판 제작"} imgPath={"images/portfolio/php.JPG"} subHeader={"PHP"}
                                   linkPath={"http://www.risker.shop/board"} githubPath={"https://github.com/qnffnrl/phpBoard"}/>

                    <PortfolioCard numbering={2} headerName={"test"} headerName={"Springboot 웹 게시판 제작"} imgPath={"images/portfolio/springboot.png"} subHeader={"Sprngboot / Spring Security / Spring Data JPA"}
                                   linkPath={"http://www.risker.shop:8080/board/main"} githubPath={"https://github.com/qnffnrl/springbootBoard"} comment={"(준비중)"}/>
                    
                    <PortfolioCard numbering={3} headerName={"2022 캡스톤 디자인 TTS를 활용한 파일 리딩 프로그램"} imgPath={"images/portfolio/tts.png"} subHeader={"JSP / Flask / Apache POI / TTS"}
                                   linkPath={"http://www.capstonemtb.kro.kr"} githubPath={"https://github.com/qnffnrl/2022_1_capstone"}/>

                    <PortfolioCard numbering={4} headerName={"2021 단기집중교육 JSP 웹 게시판 제작"} imgPath={"images/portfolio/jsp.png"} subHeader={"JSP"}
                                   linkPath={"#"} githubPath={"https://github.com/qnffnrl/jsp_board"} comment={"(준비중)"}/>

                </div>

                <div className="card-wrap d-flex">
                    <PortfolioCard numbering={5} headerName={"React 포트폴리오 제작"} imgPath={"images/portfolio/portfolio.png"} subHeader={"React"}
                                   linkPath={"https://qnffnrl.github.io"} githubPath={"https://github.com/qnffnrl/portfolio"}/>

                    <PortfolioCard numbering={6} headerName={"(주)BA Energy 배터리 모니터링페이지 용역 개발"} imgPath={"images/portfolio/bsb.png"} subHeader={"Static Web / API Call"}
                                   linkPath={"http://www.risker.shop/bsb"} githubPath={"https://github.com/qnffnrl/webSocket"}/>
                    {/*<PortfolioCard numbering={7}/>*/}
                    {/*<PortfolioCard numbering={8}/>*/}
                </div>
            </div>
        </div>
    );
}

export default Folio;
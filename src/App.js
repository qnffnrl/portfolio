/* eslint-disable */
import './App.css';
import "./custom-tools.css"
import "./modal.css"
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./component/Home";
import Nav from "./component/Nav"
import AboutMe from "./component/AboutMe";
import Activity from "./component/Activity";
import Folio from "./component/Folio";
import Contact from "./component/Contact";

function App (){
    return (
            <div className="page">
                <Nav></Nav>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/About" element={<AboutMe/>}/>
                    <Route exact path="/Activity" element={<Activity/>}/>
                    <Route exact path="/Folio" element={<Folio/>}/>
                    <Route exact path="/Contact" element={<Contact/>}/>
                </Routes>
            </div>
    )
}
export default App;












/**
 *  nav 아이콘 효과 제거
 */
function clear(){
    for (let i = 0; i < 5; i++) {
        document.getElementsByClassName("n")[i].setAttribute("style", "text-decoration:none;")
    }
}

/**
 *  현재 페이지 nav 아이콘 효과
 */
function checkIndex(){
    let index = (window.location.href).split('/')[3];
    if(index === "Contact") {
        clear();
        document.getElementsByClassName("n")[4].setAttribute("style", "background: linear-gradient(90deg, #ee0979, #ff6a00); color: transparent; -webkit-background-clip: text; font-weight: bolder;")
    }else if(index === "About"){
        clear();
        document.getElementsByClassName("n")[1].setAttribute("style", "background: linear-gradient(90deg, #ee0979, #ff6a00); color: transparent; -webkit-background-clip: text; font-weight: bolder;")
    }else if(index === "Activity"){
        clear();
        document.getElementsByClassName("n")[2].setAttribute("style", "background: linear-gradient(90deg, #ee0979, #ff6a00); color: transparent; -webkit-background-clip: text; font-weight: bolder;")
    }else if(index === "Folio"){
        clear();
        document.getElementsByClassName("n")[3].setAttribute("style", "background: linear-gradient(90deg, #ee0979, #ff6a00); color: transparent; -webkit-background-clip: text; font-weight: bolder;")
    }else{
        clear();
        document.getElementsByClassName("n")[0].setAttribute("style", "background: linear-gradient(90deg, #ee0979, #ff6a00); color: transparent; -webkit-background-clip: text; font-weight: bolder;")
    }
}
setInterval(checkIndex, 100);





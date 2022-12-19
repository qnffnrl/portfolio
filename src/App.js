/* eslint-disable */
import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Nav from "./component/Nav"
import AboutMe from "./component/AboutMe";
import Activity from "./component/Activity";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";

function clear(){
    document.getElementById("home").style.filter = "none";
    document.getElementById("about").style.filter = "none";
    document.getElementById("activity").style.filter = "none";
    document.getElementById("portfolio").style.filter = "none";
    document.getElementById("contact").style.filter = "none";
}

function checkIndex(){
    let index = (window.location.href).split('/')[3];
    if(index === "Home" || index === "") {
        clear();
        document.getElementById("home").style.filter = "opacity(0.5) drop-shadow(0 0 0 #3498db)";
    }else if(index === "About"){
        clear();
        document.getElementById("about").style.filter = "opacity(0.5) drop-shadow(0 0 0 #3498db)";
    }else if(index === "Activity"){
        clear();
        document.getElementById("activity").style.filter = "opacity(0.5) drop-shadow(0 0 0 #3498db)";
    }else if(index === "Portfolio"){
        clear();
        document.getElementById("portfolio").style.filter = "opacity(0.5) drop-shadow(0 0 0 #3498db)";
    }else{
        clear();
        document.getElementById("contact").style.filter = "opacity(0.5) drop-shadow(0 0 0 #3498db)";
    }
}
setInterval(checkIndex, 100);

function App (){
    return (
        <div className="page">
            <Nav></Nav>
            <Routes>
                <Route path="/" element={<Home/>} exact={true}/>
                <Route path="/Home" element={<Home/>} exact={true}/>
                <Route path="/About" element={<AboutMe/>} exact={true}/>
                <Route path="/Activity" element={<Activity/>} exact={true}/>
                <Route path="/Portfolio" element={<Portfolio/>} exact={true}/>
                <Route path="/Contact" element={<Contact/>} exact={true}/>
            </Routes>
        </div>
    )
}
export default App;
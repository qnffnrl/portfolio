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
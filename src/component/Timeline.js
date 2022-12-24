import React from 'react';
import "../custom-tools.css";
import "../App.css"

function Timeline(props) {
    return (
        <li className="event" data-date={props.data}>
            <h3>{props.title}</h3>
            <p className="main-content">{props.content}</p>
            <p className="sub-content">{props.content2}</p>
        </li>
    );
}

export default Timeline;
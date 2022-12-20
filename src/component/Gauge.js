import React from 'react';
import "../custom-tools.css";
import "../App.css"

function Gauge(props) {

    let percentageText = ((props.percentage).split("-")[1]) + "%";

    return (
        <div className="gauge-card d-flex flex-direction-column">
            <div className="gauge-card-title d-flex justify-content-between">
                <p className="bold">{props.title}</p>
                <p className="bold">{percentageText}</p>
            </div>
            <div className="gauge-outer d-flex align-items-center">
                <div id="this" className={"gauge-inner " + props.percentage}>
                    <span className="d-none">-</span>
                </div>
            </div>
        </div>
    );
}
export default Gauge;

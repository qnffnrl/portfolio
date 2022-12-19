/* eslint-disable */
import React from 'react';

function Activity(props) {
    return (
        <div className="back">
            <div className="wrapper">
                <p className="title font-size-big"><span className="gradient">@Activity</span></p>
                <div id="activity-content" className="d-flex">
                    <div id="activity-content-left" className="d-flex flex-direction-column">
                        <p className="sub-title">Education</p>
                        <ul className="timeline">
                            <li className="event" data-date="2022">
                                <h3>Registration</h3>
                                <p>Get here on time, it's first come first serve. Be late, get turned away.</p>
                            </li>
                            <li className="event" data-date="2022">
                                <h3>Opening Ceremony</h3>
                                <p>
                                    Get ready for an exciting event, this will kick off in amazing fashion with MOP &
                                    Busta Rhymes as an opening show.
                                </p>
                            </li>
                            <li className="event" data-date="2022">
                                <h3>Main Event</h3>
                                <p>
                                    This is where it all goes down. You will compete head to head with your friends and
                                    rivals. Get ready!
                                </p>
                            </li>
                            <li className="event" data-date="2022">
                                <h3>Closing Ceremony</h3>
                                <p>
                                    See how is the victor and who are the losers. The big stage is where the winners bask
                                    in their own glory.
                                </p>
                            </li>
                        </ul>
                        <p className="sub-title">Experience</p>
                        <ul className="timeline">
                            <li className="event" data-date="2022">
                                <h3>Registration</h3>
                                <p>Get here on time, it's first come first serve. Be late, get turned away.</p>
                            </li>
                            <li className="event" data-date="2022">
                                <h3>Opening Ceremony</h3>
                                <p>
                                    Get ready for an exciting event, this will kick off in amazing fashion with MOP &
                                    Busta Rhymes as an opening show.
                                </p>
                            </li>
                            <li className="event" data-date="2022">
                                <h3>Main Event</h3>
                                <p>
                                    This is where it all goes down. You will compete head to head with your friends and
                                    rivals. Get ready!
                                </p>
                            </li>
                            <li className="event" data-date="2022">
                                <h3>Closing Ceremony</h3>
                                <p>
                                    See how is the victor and who are the losers. The big stage is where the winners bask
                                    in their own glory.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div id="activity-content-right" className="d-flex flex-direction-column">
                        <p className="sub-title">Coding <span className="gradient">Skills</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activity;
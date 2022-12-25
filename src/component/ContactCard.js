import React from 'react';

function ContactCard(props) {
    return (
        <div className="contact-card d-flex flex-direction-column justify-content-center align-items-center">
            <img src={props.iconPath}/>
            <br/>
            <p className="bold">{props.text}</p>
        </div>
    );
}

export default ContactCard;
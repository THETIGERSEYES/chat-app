import React from 'react';
import './Contact.css';




function Contact() {
    return(
        <figure className="Contact">
            <img  className="avatar" src= "https://randomuser.me/api/portraits/women/35.jpg" alt="avatar-profile" />
       
            <div className ="StatusName">
                <p className="Name">Dianne Hale</p>
                        <div className ="status">
                <span className ="status-online"></span>
                <p className ="status-text"> Online</p>
            </div>
            </div>
        </figure>
    );  
}

export default Contact;
import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

function Contact(props) {
  return (
    <figure className="Contact">
      <img src={props.avatar} alt={props.name} className="avatar" />
      <div className="namedisplay">
        <p className="name">{props.name}</p>
        <div className="status">
          <span
            className={props.online ? "status-online" : "status-offline"}
          ></span>
          <p className="status-text">{props.online ? "Online" : "Offline"}</p>
        </div>
      </div>
    </figure>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};

export default Contact;
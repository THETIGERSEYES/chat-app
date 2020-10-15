import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';




class Contact extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
      online : props.online,
   };
 } 
 render() { 
  return (
    <figure className="Contact">
      <img src={this.props.avatar} alt={this.props.name} className="avatar" />
      <div className="namedisplay">
        <p className="name">{this.props.name}</p>
        <div className="status"
            onClick={event => {
              const newOnline = !this.state.online;
              this.setState({ online : newOnline});
            }}
        >
        <span
            className={this.state.online ? "status-offline": "status-online"}
        >
        </span>
        <p className="status-text">{this.state.online ? "Online" : "Offline"}</p>
        </div> 
            
      </div>
    </figure>
  );
 }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};

export default Contact;
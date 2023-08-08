import React, { Component } from 'react';

class Footer extends Component {
    
    createAlert() {
        alert('You clicked me');
    }
    
    render() {
        return <h2 onClick={this.createAlert}>
            {this.props.trademark}
        </h2>
    }
}

export default Footer;

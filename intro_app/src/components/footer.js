import React, { Component } from 'react';

class Footer extends Component {
    
    render() {
        return <h2 onClick={this.props.myalert}>
            {this.props.trademark}
        </h2>
    }
}

export default Footer;

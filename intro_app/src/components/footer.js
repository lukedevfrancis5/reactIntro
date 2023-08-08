import React, { Component } from 'react';

class Footer extends Component {
    
    state = {
        name: ''
    }

    componentDidMount() {
        this.setState({name: 'MyName'});
    }

    changed = evt => {
        this.setState({name: evt.target.value})
        console.log(this.state.name);

    }

    render() {
        return (
            <div>
                <h2 onClick={this.props.myalert}>
                    {this.props.trademark}
                </h2>
                <input onChange={this.changed} type='text'/>
            </div>
        ) 
    }
}

export default Footer;

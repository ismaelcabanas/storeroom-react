import React, { Component } from 'react';

class Label extends Component {
    render() {
        return (<label htmlFor={this.props.refered}>Name</label>)
    }
}

export default Label;
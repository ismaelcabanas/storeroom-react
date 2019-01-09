import React, { Component } from 'react';

class Text extends Component {
    render() {
        return (<input type="text" 
                    name={this.props.name} 
                    className="form-control" 
                    placeholder={this.props.placeholder} />)
    }
}

export default Text;
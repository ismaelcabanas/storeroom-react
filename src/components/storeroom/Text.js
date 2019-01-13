import React, { Component } from 'react';

class Text extends Component {
    static defaultProps = {
        value: ''
    }

    render() {
        return (<input type="text" 
                    name={this.props.name} 
                    className="form-control" 
                    placeholder={this.props.placeholder} 
                    value={this.props.value} />)
    }
}


export default Text;
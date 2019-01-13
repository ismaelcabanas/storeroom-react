import React, { Component } from 'react';

class Text extends Component {    
    static defaultProps = {
        value: ''
    }

    render() {
        const {
            name,
            placeholder,
            value
        } = this.props

        return (<input type="text" 
                    name={name} 
                    className="form-control" 
                    placeholder={placeholder} 
                    value={value} />)
    }
}


export default Text;
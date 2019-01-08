import React, {Component} from 'react';
import Label from '../storeroom/Label';
import Text from '../storeroom/Text';

class TextFormElement extends Component {

    render() {
        return (
            <div className="form-group">
                <Label refered={this.props.name} />
                <Text name={this.props.name} />
            </div>
        )
    }
}

export default TextFormElement;
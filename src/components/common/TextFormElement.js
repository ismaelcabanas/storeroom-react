import React, {Component} from 'react';
import Label from '../storeroom/Label';
import Text from '../storeroom/Text';

class TextFormElement extends Component {
    render() {
        return (
            <div clasName='form-group'>
                <Label />
                <Text />
            </div>
        )
    }
}

export default TextFormElement;
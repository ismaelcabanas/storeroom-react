import React, {Component} from 'react';
import TextFormElement from '../common/TextFormElement';
import Button from '../storeroom/Button';

class AddStoreroomForm extends Component {
    render() {
        return (
            <form>
                <TextFormElement />
                <Button />
            </form>
        )
    }
}

export default AddStoreroomForm;
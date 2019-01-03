import React, { Component } from 'react';
import Header from '../components/storeroom/Header';
import Label from '../components/storeroom/Label';
import Text from '../components/storeroom/Text';
import Button from '../components/storeroom/Button';

class AddStoreroom extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Label />
                <Text />
                <Button />
            </div>                
        )

    }
}

export default AddStoreroom;
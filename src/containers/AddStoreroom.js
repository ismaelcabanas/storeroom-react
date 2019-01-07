import React, { Component } from 'react';
import Header from '../components/storeroom/Header';
import AddStoreroomForm from '../components/storeroom/AddStoreroomForm';

class AddStoreroom extends Component {
    render() {
        return (
            <div>
                <Header />
                <AddStoreroomForm />
            </div>                
        )

    }
}

export default AddStoreroom;
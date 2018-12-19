import React, { Component } from 'react';

class LoginButton extends Component {
    render () {
        return <button>Log in</button>
    }
}

class LogoutButton extends Component {
    render () {
        return (
            <div>
                <p>Welcome, user!</p>
                <button>Log out</button>
            </div>
        )
    }
}

export default class ConditionalSection extends Component{
    constructor() {
        super()
        this.state = {isUserLogged: false}
    }
    render () {
        return (
            <div>
                <h4>Conditional Section</h4>
                {this.state.isUserLogged 
                    ? <LogoutButton />
                    : <LoginButton />
                }
            </div>
        )
    }
}
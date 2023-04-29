import React, { Component } from 'react';

class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    login() {
        this.props.history.push('/login')
    }

    register() {
        this.props.history.push('/register')
    }

    render() {
        return (
            <div style={{ position: "absolute", bottom: '50px', right: '50px', textAlign: 'right' }}>
                <div>
                    <button className="btn btn-light" onClick={this.login}><b>LOG IN</b></button><p> </p>
                    <button className="btn btn-light" onClick={this.register}><b>REGISTER</b></button><p> </p>
                </div>
                <h2 style={{ color: "cadetblue" }}><b> Welcome to TechnOSearch !</b></h2>
            </div>
        );
    }
}

export default WelcomePage;
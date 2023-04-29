import React, { Component } from 'react';


class LogoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.login = this.login.bind(this);
        this.welcome = this.welcome.bind(this);
    }

    componentDidMount() {
        localStorage.clear();
    }

    login() {
        this.props.history.push('/login')
    }

    welcome() {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="container">
                <div className="row" style={{ position: 'relative', top: '150px' }}>
                    <center><h3 style={{ color: "white" }}><b>Logged Out Successfully</b></h3>
                        <br />
                        <button className="btn btn-light" onClick={this.login}><b>LOG IN Again</b></button>
                        <p></p>
                        <button className="btn btn-light" onClick={this.welcome}><b>Welcome Page</b></button></center>
                </div>
            </div>
        );
    }
}

export default LogoutPage;
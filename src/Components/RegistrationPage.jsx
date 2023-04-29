import React, { Component } from 'react';
import AuthService from '../Services/AuthService';

class RegistrationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            name: '',
            email: '',
            NoUserName: ''
        }
        this.changeUserNameHandler.bind(this);
        this.changePasswordHandler.bind(this);
        this.changeNameHandler.bind(this);
        this.changeEmailHandler.bind(this);

        this.saveNewUser.bind(this);
        this.login = this.login.bind(this);
        this.welcome = this.welcome.bind(this);
    }
    saveNewUser = (c) => {
        c.preventDefault();
        let keyword = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            email: this.state.email
        };

        if (keyword.username === "" || keyword.password === "" || keyword.name === "" || keyword.email === "") {
            console.log("Hi this is username", keyword.username);
            alert("All fields are mandatory")
        }
        else if (keyword.password.length < 6) {
            alert("Password must be atleast 6 characters long!")
        }
        else if (!keyword.email.includes('@')) {
            alert("Invalid Email (Must have '@' symbol)")
        }
        else {
            console.log('user => ' + JSON.stringify(keyword));
            AuthService.registerUser(keyword).then((res) => {
                alert(res.data);
                this.props.history.push('/login');
            });
        }
    }

    changeUserNameHandler = (event) => {
        this.setState({ username: event.target.value })
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value })
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value })
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value })
    }


    login() {
        this.props.history.push('/login');
    }

    welcome() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="containeradd">
                <div className="row">
                    <div className="card col-md-4 offset-md-3 offset-md-3">
                        <h2 className="text-center"><b>Register</b></h2><br />
                        <div className="card-body">
                            <form>
                                <table>
                                    <div className="form-group">
                                        <tr><td><label>Username: &nbsp;</label></td><td>
                                            <input placeholder="Enter Username" name="username" className="form-control" value={this.state.username} onChange={this.changeUserNameHandler} />
                                        </td><td>{this.state.NoUserName}</td></tr>
                                    </div>
                                    <div className="form-group">
                                        <tr><td><label>Password: &nbsp;&nbsp;</label></td><td>
                                            <input type="password" title="Password must be 6 characters long" placeholder="Enter Password" name="password" className="form-control" value={this.state.password} onChange={this.changePasswordHandler} />
                                        </td></tr></div>
                                    <div className="form-group">
                                        <tr><td><label>Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></td><td>
                                            <input placeholder="Enter Name" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler} />
                                        </td></tr></div>
                                    <div className="form-group">
                                        <tr><td><label>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></td><td>
                                            <input placeholder="Enter Email" title="Email must contain '@' symbol" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler} /><p> </p>
                                        </td></tr></div>
                                    <div>
                                        <tr><td><button className="btn btn-secondary" style={{ backgroundColor: "slategray", width: "150px", height: '40px' }} onClick={this.saveNewUser}><b>Register</b></button></td><p>&nbsp;</p></tr><br />
                                        <tr><td><button className="btn btn-secondary" style={{ backgroundColor: "slategray", height: '40px' }} onClick={this.login}><b>Already a user? Login here!</b></button></td><p>&nbsp;&nbsp;</p>
                                            <td><button className="btn btn-secondary" style={{ backgroundColor: "slategray", width: "150px", height: '40px' }} onClick={this.welcome}><b>Back</b></button></td>
                                        </tr></div>
                                    <br />
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegistrationPage;
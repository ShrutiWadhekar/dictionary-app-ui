import React, { Component } from 'react';
import AuthService from '../Services/AuthService';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            login: false
        }
        this.changeUserNameHandler.bind(this);
        this.changePasswordHandler.bind(this);

        this.saveUser.bind(this);
        this.register = this.register.bind(this);
        this.welcome = this.welcome.bind(this);
        this.callDifferent = this.callDifferent.bind(this);
    }
    saveUser = (c) => {
        c.preventDefault();
        let keyword = {
            userName: this.state.userName,
            password: this.state.password
        };

        console.log('user => ' + JSON.stringify(keyword));
        AuthService.loginUser(keyword).then((response) => {
            console.log(response.data.token)
            localStorage.setItem('token', response.data.token);
            // console.log(localStorage.getItem('token'));
            if (response.data.token != null)
                alert("Logged In");

            //console.log("before setting ",window.global)
            this.callDifferent()

        }).catch(err => {
            alert("Invalid Username or Password");
            console.log(err);
        })
    }

    callDifferent() {
        console.log("Hiii");

        AuthService.isAdmin(this.state.userName).then((res) => {
            console.log("method sent it.. ", res.data)
            if (res.data === true) {
                this.props.history.push('/admin-home');
            }
            else {
                this.props.history.push('/home');
            }
        }).catch(err => {
            //alert(err);
            console.log("WHAAAAAAAT");
        })

        //console.log("after setting ", window.global)
    }

    changeUserNameHandler = (event) => {
        this.setState({ userName: event.target.value })
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value })
    }

    register() {
        this.props.history.push('/register')
    }

    welcome() {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="containeradd">
                <div className="row">
                    <div className="card col-md-4 offset-md-3 offset-md-3">
                        <h2 className="text-center"><b>Login</b></h2> <br />
                        <div className="card-body">
                            <form>
                                <table>
                                    <div className="form-group">
                                        <tr><td><label>Username: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></td><td>
                                            <input placeholder="Enter Username" name="userName" className="form-control" value={this.state.userName} onChange={this.changeUserNameHandler} /><p> </p>
                                        </td></tr></div>
                                    <div className="form-group">
                                        <tr><td><label>Password: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></td><td>
                                            <input type="password" placeholder="Enter Password" name="password" className="form-control" value={this.state.password} onChange={this.changePasswordHandler} />
                                        </td></tr></div>
                                    <br />
                                    <div>
                                        <tr><td><button className="btn btn-secondary" style={{ backgroundColor: "slategray", width: "150px", height: '40px' }} onClick={this.saveUser}><b>Login</b></button><p> </p>
                                        </td></tr><tr><td><button className="btn btn-secondary" style={{ backgroundColor: "slategray", height: '40px' }} onClick={this.register}><b>New User? Register here!</b></button><p> </p>
                                        </td><p>&nbsp;&nbsp;</p>
                                            <td><button className="btn btn-secondary" style={{ backgroundColor: "slategray", width: "150px", height: '40px' }} onClick={this.welcome}><b>Back</b></button><p> </p>
                                            </td></tr>
                                    </div>
                                </table>
                                <br />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
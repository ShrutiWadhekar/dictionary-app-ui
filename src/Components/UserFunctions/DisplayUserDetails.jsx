import React, { Component } from 'react';
import AuthService from '../../Services/AuthService';


class DisplayUserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            resultUser: [],
            show: true,
            rolesArr: []
        }
        this.changeNameHandler.bind(this);
        this.searchUser.bind(this);
        this.list = this.list.bind(this);
    }

    searchUser = (c) => {
        c.preventDefault();
        console.log('name => ' + JSON.stringify(this.state.name));
        AuthService.displayUser(this.state.name).then((res) => {
            this.setState({
                resultUser: res.data,
                rolesArr: res.data.authorities
            })
            console.log("%%%%%%%%%%%%%%%%%%%%")
            console.log(res.data)
            if (res.data !== '') {
                console.log("Hi")
                this.setState({ show: false })
            }
            else {
                alert("User does not exist!")
            }
        });
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value })
    }

    list() {
        this.props.history.push('/admin-home');
    }

    render() {
        return (
            <div className="container">
                <div className="row" >
                    {this.state.show ?
                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{ position: "absolute", top: "150px" }}>
                            <h3 className="text-center"><b>Search User by Username</b></h3><br />
                            <div className="card-body">
                                <form>
                                    <table>
                                        <div className="form-group">
                                            <label><b>Username: </b></label><p> </p>
                                            <input placeholder="Enter Username Here" title="Username is Case Sensitive" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler} />
                                        </div><br />
                                        <div>
                                            <button className="btn btn-secondary" style={{ backgroundColor: "slategray" }} onClick={this.searchUser}>Search User</button>
                                            &nbsp;
                                            <button className="btn btn-secondary" style={{ backgroundColor: "slategray" }} onClick={this.list}>Back</button>
                                        </div>
                                    </table>
                                    <br />
                                </form>
                            </div>
                        </div>
                        :
                        <div>
                            <div style={{ position: 'absolute', right: '30px', top: '15px' }}>
                                <button className="btn btn-light" onClick={this.list}>Back</button>
                            </div>
                            <div style={{ position: "relative", top: "100px", color: "white" }}>
                                <center><h2>Account Details</h2></center>
                                <h4>ID: {this.state.resultUser.id} </h4>
                                <h4>Name: {this.state.resultUser.name} <br /></h4>
                                <h4>Username: {this.state.resultUser.userName} </h4>
                                <h4>Email: {this.state.resultUser.email} </h4>
                                <h4>Password: {this.state.resultUser.password} </h4>
                                <h4>Roles:</h4>
                                <br />
                                <table className="table table-bordered">
                                    <thead>
                                        <tr style={{ color: "white" }}>
                                            <th>Role Id</th>
                                            <th>Role Code</th>
                                            <th>Authority</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {
                                            this.state.rolesArr.map(
                                                role =>
                                                    <tr key={role.id}>
                                                        <td style={{ color: "white" }}> {role.id}</td>
                                                        <td style={{ color: "white" }}> {role.roleCode}</td>
                                                        <td style={{ color: "white" }}> {role.authority}</td>
                                                    </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default DisplayUserDetails;
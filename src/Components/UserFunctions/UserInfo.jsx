import React, { Component } from 'react';
import AuthService from '../../Services/AuthService';

class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultUser: [],
            rolesArr: []
        }
        this.list = this.list.bind(this);
    }

    componentDidMount() {
        AuthService.getUserInfo().then((res) => {
            this.setState({
                resultUser: res.data,
                rolesArr: res.data.roles
            })
            // console.log("res",res.data)
            // console.log("name",res.data.name)
            // console.log("username",res.data.userName)
            console.log("roles", res.data.roles)
            // console.log("resultUser",this.state.resultUser)
            // console.log("resultUser",this.state.resultUser.roles[0])
        })
        //this.setState({rolesArr: this.state.resultUser.roles })
        //console.log(this.state.rolesArr)
    }

    list() {
        this.props.history.push('/admin-home');
    }

    render() {
        return (
            <div className="row" >
                <div>
                    <div style={{ position: 'absolute', right: '30px', top: '15px' }}>
                        <button className="btn btn-light" onClick={this.list}><b>Back</b></button>
                    </div>
                    <div style={{ position: 'relative', top: '50px', color: "white" }}>
                        <div>
                            <p></p>
                            <center><h2>Account Details</h2></center>
                            <br />
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
                            <p style={{color:"darkred"}}>Note: Refresh the page if you cannot see proper information or old information</p>
                        </div>
                    </div> </div>
            </div>
        );
    }
}

export default UserInfo;

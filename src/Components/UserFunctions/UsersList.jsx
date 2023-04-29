import React, { Component } from 'react';
import AuthService from '../../Services/AuthService';

class UsersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            roles: [],
            newObj: [{
                id: '',
                username: '',
                name: '',
                email: '',
                role: ''
            }]
        }
        this.list = this.list.bind(this);
    }

    componentDidMount() {

        AuthService.getAllUsers().then((res) => {
            this.setState({
                users: res.data
            })
            console.log("authorities", res.data[0].authorities[0].roleCode);
            console.log(this.state.roles);
            console.log("user - ", this.state.users);
            console.log("length - ", this.state.users[0].authorities.length);
            const temp = []
            console.log("///////////////ARRAYS///////////////")
            for (let j = 0; j < this.state.users.length; j++) {
                let strtemp = ''
                for (let i = 0; i < this.state.users[j].authorities.length; i++) {
                    //console.log("ROLE ",this.state.users[0].authorities[i].roleCode);
                    strtemp = strtemp + ' ' + this.state.users[0].authorities[i].roleCode
                    console.log("String ", strtemp)
                }
                temp.push(strtemp)
            }
            console.log("Final temp :", temp)
            this.setState({ roles: temp })
            console.log("Trying...", this.state.roles)
            let obj = [{
                id: '',
                username: '',
                name: '',
                email: '',
                role: ''
            }];

            let singleObj;

            for (let j = 0; j < this.state.users.length; j++) {
                singleObj = {
                    id: '',
                    username: '',
                    name: '',
                    email: '',
                    role: ''
                };
                singleObj.id = this.state.users[j].id;
                singleObj.username = this.state.users[j].userName;
                singleObj.name = this.state.users[j].name;
                singleObj.email = this.state.users[j].email;
                singleObj.role = this.state.roles[j];
                obj.push(singleObj);

                console.log(obj[j]);
            }

            this.setState({
                newObj: obj
            })
        })
    }

    list() {
        this.props.history.push('/admin-home');
    }

    //{ <tr>{this.state.roles.map((roles,j) =><tr style={{color: "white"}} key={j}>{roles}</tr>)}</tr> }

    render() {
        return (
            <div className="row" style={{ position: "relative", top: "100px" }}>
                <h2 className="text-center" style={{ color: "white" }}> List of Users </h2>
                <div >
                    <table className="table table-bordered" style={{ fontSize: "16px" }}>
                        <thead >
                            <tr style={{ color: "white" }}>
                                <th>User Id</th>
                                <th>Username</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                this.state.newObj.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td style={{ color: "white" }}> {user.id}</td>
                                            <td style={{ color: "white" }}> {user.username}</td>
                                            <td style={{ color: "white" }}> {user.name}</td>
                                            <td style={{ color: "white" }}> {user.email}</td>
                                            <td style={{ color: "white" }}> {user.role}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div>
                        <button className="btn btn-light" onClick={this.list}>Back</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UsersList;

import React, { Component } from 'react';
import AuthService from '../../Services/AuthService';

class DeleteUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.changeNameHandler.bind(this);
        this.deleteUser.bind(this);
        this.list = this.list.bind(this);
    }

    deleteUser = (c) => {
        c.preventDefault();
        console.log('name => ' + JSON.stringify(this.state.name));
        AuthService.deleteUser(this.state.name).then((res) => {
            console.log(res)
            alert(res.data)
        });
    }

    list() {
        this.props.history.push('/admin-home');
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value })
    }

    render() {
        return (
            <div className="container">
                <div className="row" >
                    <div className="card col-md-6 offset-md-3 offset-md-3" style={{ position: "absolute", top: "150px" }}>
                        <h3 className="text-center"><b>Delete User</b></h3><br />
                        <div className="card-body">
                            <form>
                                <table>
                                    <div className="form-group">
                                        <label><b>Username: </b></label><p> </p>
                                        <input placeholder="Enter Username Here" name="name" title="Username is Case Sensitive" className="form-control" value={this.state.name} onChange={this.changeNameHandler} />
                                    </div><br />
                                    <div>
                                        <button className="btn btn-secondary" style={{ backgroundColor: "slategray" }} onClick={this.deleteUser}>Delete</button>
                                        &nbsp;
                                        <button className="btn btn-secondary" style={{ backgroundColor: "slategray" }} onClick={this.list}>Back</button>
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

export default DeleteUser;
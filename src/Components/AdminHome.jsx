import React, { Component } from 'react';

class AdminHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            userDB: false,
            keywordDB: false,
            UsersView: false
        }

        this.userInfo = this.userInfo.bind(this);
        this.listUsers = this.listUsers.bind(this);
        this.giveAccess = this.giveAccess.bind(this);
        this.revokeAccess = this.revokeAccess.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.displayUserDetails = this.displayUserDetails.bind(this);

        this.addKeyword = this.addKeyword.bind(this);
        this.listKeyword = this.listKeyword.bind(this);
        this.searchKeyword = this.searchKeyword.bind(this);
        this.searchKeywordAdmin = this.searchKeywordAdmin.bind(this);
        this.deleteKeyword = this.deleteKeyword.bind(this);
        this.editKeyword = this.editKeyword.bind(this);
        this.logout = this.logout.bind(this);

        this.setUserDB.bind(this);
        this.setKeywordDB.bind(this);
        this.setUsersView.bind(this);
    }

    componentDidMount() {
        this.setState({
            show: false,
            userDB: false,
            keywordDB: false,
            UsersView: false
        })
    }

    setUserDB = (c) => {
        c.preventDefault();
        this.setState({ userDB: !this.state.userDB })
    }

    setKeywordDB = (c) => {
        c.preventDefault();
        this.setState({ keywordDB: !this.state.keywordDB })
    }

    setUsersView = (c) => {
        c.preventDefault();
        this.setState({ UsersView: !this.state.UsersView })
    }

    addKeyword() {
        this.props.history.push('/add-keyword')
    }

    searchKeyword() {
        this.props.history.push('/search-keyword')
    }

    searchKeywordAdmin(){
        this.props.history.push('/search-keyword-admin')
    }

    deleteKeyword() {
        this.props.history.push('/delete-keyword')
    }

    listKeyword() {
        this.props.history.push('/list-keyword')
    }

    editKeyword() {
        this.props.history.push('/edit-keyword')
    }

    userInfo() {
        this.props.history.push('/user-info')
    }

    listUsers() {
        this.props.history.push('/list-users')
    }

    logout() {
        this.props.history.push('/logout')
    }

    giveAccess() {
        this.props.history.push('/admin-access')
    }

    revokeAccess() {
        this.props.history.push('/revoke-admin-access')
    }

    deleteUser() {
        this.props.history.push('/delete-user')
    }

    displayUserDetails() {
        this.props.history.push('/display-user')
    }

    render() {
        return (
            <div>
                {!this.state.userDB && !this.state.keywordDB && !this.state.UsersView ?
                    <div>
                        <button className="btn btn-light btn-circle btn-xl" style={{ position: "absolute", top: '220px', left: '200px' }} onClick={this.userInfo}><b>Your<br />Account</b></button><p> </p>
                        <button className="btn btn-light btn-circle btn-xl" style={{ position: "absolute", top: '220px', left: '420px' }} onClick={this.setUserDB}><b>User<br />Database</b></button><p> </p>
                        <button className="btn btn-light btn-circle btn-xl" style={{ position: "absolute", top: '220px', left: '630px' }} onClick={this.setKeywordDB}><b>Keyword<br />Database</b></button><p> </p>
                        <button className="btn btn-light btn-circle btn-xl" style={{ position: "absolute", top: '220px', left: '850px' }} onClick={this.setUsersView}><b>Users<br />View</b></button><p> </p>
                    </div>
                    : <div>{this.state.userDB ?
                        <div style={{ position: "absolute", bottom: '100px', right: '50px', textAlign: 'right' }}>
                            <button className="btn btn-light" onClick={this.listUsers}><b>All Users</b></button><p> </p>
                            <button className="btn btn-light" onClick={this.giveAccess}><b>Grant Admin Access</b></button><p> </p>
                            <button className="btn btn-light" onClick={this.revokeAccess}><b>Revoke Admin Access</b></button><p> </p>
                            <button className="btn btn-light" onClick={this.deleteUser}><b>Delete User</b></button><p> </p>
                            <button className="btn btn-light" onClick={this.displayUserDetails}><b>Display User Details</b></button><p> </p>
                            <button className="btn btn-light" onClick={this.setUserDB}><b>Back to Home</b></button><p> </p>
                        </div>
                        : <div>{this.state.keywordDB ?
                            <div style={{ position: "absolute", bottom: '100px', right: '50px', textAlign: 'right' }}>
                                <button className="btn btn-light" onClick={this.addKeyword}><b>Add New Keyword</b></button><p> </p>
                                <button className="btn btn-light" onClick={this.listKeyword}><b>List of Keywords</b></button><p> </p>
                                <button className="btn btn-light" onClick={this.searchKeywordAdmin}><b>Search a Keyword</b></button><p> </p>
                                <button className="btn btn-light" onClick={this.deleteKeyword}><b>Delete a Keyword</b></button><p> </p>
                                <button className="btn btn-light" onClick={this.editKeyword}><b>Edit any Keyword</b></button><p> </p>
                                <button className="btn btn-light" onClick={this.setKeywordDB}><b>Back to Home</b></button><p> </p>
                            </div>
                            :
                            <div style={{ position: "absolute", bottom: '100px', right: '50px', textAlign: 'right' }}>
                                <button className="btn btn-light" onClick={this.listKeyword}><b>List of Keywords</b></button><p> </p>
                                <button className="btn btn-light" onClick={this.searchKeywordAdmin}><b>Search a Keyword</b></button><p> </p>
                                <button className="btn btn-light" onClick={this.setUsersView}><b>Back to Home</b></button><p> </p>
                            </div>
                        }</div>
                    }</div>
                }
                <h2 style={{ position: "absolute", bottom: '50px', right: '50px', textAlign: 'right', color: "cadetblue" }}><b> Welcome Admin !</b></h2>
                <button className="btn btn-light" style={{ position: "absolute", top: '20px', right: '20px', textAlign: 'center' }}
                    onClick={this.logout}><b>LOG OUT</b></button><p> </p>
            </div>
        );
    }
}

export default AdminHome;
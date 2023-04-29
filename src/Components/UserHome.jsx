import React, { Component } from 'react';

class DictionaryApp extends Component {
    constructor(props) {
        super(props);
        this.listKeyword = this.listKeyword.bind(this);
        this.searchKeyword = this.searchKeyword.bind(this);
        this.logout = this.logout.bind(this);
        //console.log("TOKEN: ",localStorage.getItem('token'));
    }
    searchKeyword() {
        this.props.history.push('/search-keyword')
    }

    listKeyword() {
        this.props.history.push('/list-keyword')
    }

    logout() {
        this.props.history.push('/logout')
    }

    render() {
        return (
            <div style={{ position: "absolute", bottom: '50px', right: '50px', textAlign: 'right' }}>

                <div>
                    <button className="btn btn-light" onClick={this.listKeyword}><b>List of Keywords</b></button><p> </p>
                    <button className="btn btn-light" onClick={this.searchKeyword}><b>Search a Keyword</b></button><p> </p>
                    <button className="btn btn-light" onClick={this.logout}><b>LOG OUT</b></button><p> </p>
                </div>
                <h2 style={{ color: "cadetblue" }}> Welcome to TechnOSearch !</h2>
            </div>
        );
    }
}

export default DictionaryApp;
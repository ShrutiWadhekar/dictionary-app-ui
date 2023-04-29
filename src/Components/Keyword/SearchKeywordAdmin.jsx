import React, { Component } from 'react';
import DictionaryService from '../../Services/DictionaryService';

class SearchKeywordAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.changeNameHandler.bind(this);
        this.searchKeyword.bind(this);
        this.list = this.list.bind(this);
    }

    searchKeyword = (c) => {
        c.preventDefault();
        console.log('name => ' + JSON.stringify("IN Search jsx...", this.state.name));
        DictionaryService.setKeyword(this.state.name).then((res) => {
            this.props.history.push('/display-keyword');
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
                    <div className="card col-md-6 offset-md-3 offset-md-3" style={{ position: "relative", top: "150px" }}>
                        <h3 className="text-center"><b>Search Any Keyword</b></h3><br />
                        <div className="card-body">
                            <form>
                                <table>
                                    <div className="form-group">
                                        <label><b>Name: </b></label><p> </p>
                                        <input placeholder="Enter Word Here" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler} />
                                    </div><br />
                                    <div>
                                        <button className="btn btn-secondary" style={{ backgroundColor: "slategray" }} onClick={this.searchKeyword}><b>Search Keyword</b></button>
                                        &nbsp;
                                        <button className="btn btn-secondary" style={{ backgroundColor: "slategray" }} onClick={this.list}><b>Back</b></button>
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

export default SearchKeywordAdmin;
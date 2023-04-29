import React, { Component } from 'react';
import DictionaryService from '../../Services/DictionaryService';

class DeleteKeyword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            result: ''
        }
        this.changeNameHandler.bind(this);
        this.deleteKeyword.bind(this);
        this.list = this.list.bind(this);
    }

    deleteKeyword = (c) => {
        c.preventDefault();
        console.log('name => ' + JSON.stringify(this.state.name));
        DictionaryService.deleteKeyword(this.state.name).then((res) => {
            this.setState({
                result: res.data
            })
            alert(this.state.result)
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
                    <div className="card col-md-6 offset-md-3 offset-md-3" style={{ position: "relative", top: "150px" }}>
                        <h3 className="text-center"><b>Delete a Keyword</b></h3><br />
                        <div className="card-body">
                            <form>
                                <table>
                                    <div className="form-group">
                                        <label><b>Name: </b></label><p> </p>
                                        <input placeholder="Enter Word Here" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler} />
                                    </div><br />
                                    <div>
                                        <button className="btn btn-secondary" style={{ backgroundColor: "slategray" }} onClick={this.deleteKeyword}><b>Delete Keyword</b></button>
                                        &nbsp;
                                        <button className="btn btn-secondary" style={{ backgroundColor: "slategray" }} onClick={this.list}><b>Back</b></button>
                                    </div>
                                </table>
                                <br />
                            </form>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeleteKeyword;
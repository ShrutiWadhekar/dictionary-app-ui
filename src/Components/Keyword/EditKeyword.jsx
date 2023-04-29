import React, { Component } from 'react';
import DictionaryService from '../../Services/DictionaryService';

class EditKeyword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            inventor: '',
            inventionyear: '',
            description: '',
            advantages: '',
            disadvantages: '',
            url1: '',
            url2: '',
            url3: '',
            url4: '',
            url5: '',
            url6: '',
            result: ''
        }
        this.changeNameHandler.bind(this);
        this.changeInventorHandler.bind(this);
        this.changeInventionyearHandler.bind(this);
        this.changeDescriptionHandler.bind(this);
        this.changeAdvantagesHandler.bind(this);
        this.changeDisadvantagesHandler.bind(this);
        this.changeUrl1Handler.bind(this);
        this.changeUrl2Handler.bind(this);
        this.changeUrl3Handler.bind(this);
        this.changeUrl4Handler.bind(this);
        this.changeUrl5Handler.bind(this);
        this.changeUrl6Handler.bind(this);
        this.saveKeyword.bind(this);
        this.list = this.list.bind(this);
    }
    saveKeyword = (c) => {
        c.preventDefault();
        let keyword = {
            name: this.state.name,
            inventor: this.state.inventor,
            inventionyear: this.state.inventionyear,
            description: this.state.description,
            advantages: this.state.advantages,
            disadvantages: this.state.disadvantages,
            url1: this.state.url1,
            url2: this.state.url2,
            url3: this.state.url3,
            url4: this.state.url4,
            url5: this.state.url5,
            url6: this.state.url6,
        };

        if (keyword.name === "") {
            alert('the field name is mandatory!')
        }
        else{
            console.log('keyword => ' + JSON.stringify(keyword));
            DictionaryService.editKeyword(keyword).then((res) => {
                this.setState({ result: res.data })
                alert(this.state.result);
                this.props.history.push('/list-keyword');
            });
        }
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value })
    }

    changeInventorHandler = (event) => {
        this.setState({ inventor: event.target.value })
    }

    changeInventionyearHandler = (event) => {
        this.setState({ inventionyear: event.target.value })
    }

    changeDescriptionHandler = (event) => {
        this.setState({ description: event.target.value })
    }

    changeAdvantagesHandler = (event) => {
        this.setState({ advantages: event.target.value })
    }

    changeDisadvantagesHandler = (event) => {
        this.setState({ disadvantages: event.target.value })
    }

    changeUrl1Handler = (event) => {
        this.setState({ url1: event.target.value })
    }

    changeUrl2Handler = (event) => {
        this.setState({ url2: event.target.value })
    }

    changeUrl3Handler = (event) => {
        this.setState({ url3: event.target.value })
    }

    changeUrl4Handler = (event) => {
        this.setState({ url4: event.target.value })
    }

    changeUrl5Handler = (event) => {
        this.setState({ url5: event.target.value })
    }

    changeUrl6Handler = (event) => {
        this.setState({ url6: event.target.value })
    }

    list() {
        this.props.history.push('/admin-home');
    }

    render() {
        return (
            <div className="containeradd">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center"><b>Edit Keyword</b></h2>
                        <div className="card-body">
                            <p><b>Note:</b> Enter the name of the keyword that you want to edit
                                and just enter into the fields that you want to update. 
                                Leave other fields empty.
                            </p>
                            <form>
                                <table>
                                    <div className="form-group">
                                        <tr><td><label>Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></td><td>
                                            <input required="true" placeholder="Enter Word" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler} />
                                        </td></tr></div>
                                    <div className="form-group">
                                        <tr><td><label>Inventor: &nbsp;</label></td><td>
                                            <input placeholder="Enter Inventor Name" name="inventor" className="form-control" value={this.state.inventor} onChange={this.changeInventorHandler} />
                                        </td></tr></div>
                                    <div className="form-group">
                                        <tr><td><label>Invention Year: &nbsp;&nbsp;</label></td><td>
                                            <input placeholder="Enter Year of Invention" name="inventionyear" className="form-control" value={this.state.inventionyear} onChange={this.changeInventionyearHandler} />
                                        </td></tr></div>
                                    <div className="form-group">
                                        <tr><td><label>Description:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></td><td>
                                            <input placeholder="Describe the Word" name="description" type="textarea" className="form-control" value={this.state.description} onChange={this.changeDescriptionHandler} />
                                        </td></tr></div>
                                    <div className="form-group">
                                        <tr><td><label>Advantages:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></td><td>
                                            <input placeholder="Advantages" name="advantages" className="form-control" value={this.state.advantages} onChange={this.changeAdvantagesHandler} />
                                        </td></tr></div>
                                    <div className="form-group">
                                        <tr><td><label>Disadvantages:&nbsp;&nbsp;</label></td><td>
                                            <input placeholder="Disadvantages" name="disadvantages" className="form-control" value={this.state.disadvantages} onChange={this.changeDisadvantagesHandler} />
                                        </td></tr></div>
                                    <div className="form-group">
                                        <tr><td><label>Image URL-1: &nbsp;&nbsp;&nbsp;&nbsp;</label></td><td>
                                            <input placeholder="URL of Image 1" name="url1" className="form-control" value={this.state.url1} onChange={this.changeUrl1Handler} />
                                        </td></tr></div>
                                    <div className="form-group">
                                        <tr><td><label>Image URL-2: &nbsp;&nbsp;&nbsp;&nbsp;</label></td><td>
                                            <input placeholder="URL of Image 2" name="url2" className="form-control" value={this.state.url2} onChange={this.changeUrl2Handler} />
                                        </td></tr></div>
                                    <div className="form-group">
                                        <tr><td><label>Image URL-3: &nbsp;&nbsp;&nbsp;&nbsp;</label></td><td>
                                            <input placeholder="URL of Image 3" name="url3" className="form-control" value={this.state.url3} onChange={this.changeUrl3Handler} />
                                        </td></tr></div>
                                    <div className="form-group">
                                        <tr><td><label>Image URL-4: &nbsp;&nbsp;&nbsp;&nbsp;</label></td><td>
                                            <input placeholder="URL of Image 4" name="url4" className="form-control" value={this.state.url4} onChange={this.changeUrl4Handler} />
                                        </td></tr></div>
                                    <div className="form-group">
                                        <tr><td><label>Image URL-5: &nbsp;&nbsp;&nbsp;&nbsp;</label></td><td>
                                            <input placeholder="URL of Image 5" name="url5" className="form-control" value={this.state.url5} onChange={this.changeUrl5Handler} />
                                        </td></tr></div>
                                    <div className="form-group">
                                        <tr><td><label>Image URL-6: &nbsp;&nbsp;&nbsp;&nbsp;</label></td><td>
                                            <input placeholder="URL of Image 6" name="url6" className="form-control" value={this.state.url6} onChange={this.changeUrl6Handler} />
                                        </td></tr></div>
                                    <div>
                                        <button className="btn btn-secondary" style={{ backgroundColor: "slategray" }} onClick={this.saveKeyword}>Submit Keyword</button>
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

export default EditKeyword;
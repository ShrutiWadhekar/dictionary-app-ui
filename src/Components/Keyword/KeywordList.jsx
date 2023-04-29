import React, { Component } from 'react';
import DictionaryService from '../../Services/DictionaryService';

class KeywordList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keywords: []
        }
        this.list = this.list.bind(this);
        //this.displayWord.bind(this);
        this.displayWordParam.bind(this);
        console.log("TOKEN: ", localStorage.getItem('token'));
    }

    componentDidMount() {
        DictionaryService.getKeywords().then((res) => {
            this.setState({
                keywords: res.data
            })
        })
    }

    // displayWord = (c) => {
    //     c.preventDefault();
    //     console.log("Hiii " + c.target.value);
    //     DictionaryService.setKeyword(c.target.value).then((res) => {
    //         this.props.history.push('/display-keyword');
    //     });
    // }

    displayWordParam(param) {
        console.log("Hii_Param " + param);
        DictionaryService.setKeyword(param).then((res) => {
            this.props.history.push('/display-keyword');
        });
    }

    list() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="row" style={{ position: "relative", top: "100px" }}>
                <h2 className="text-center" style={{ color: "white" }}><b>List of Keywords</b></h2>
                <div>
                    <table className="table table-bordered" style={{ fontSize: '18px' }}>
                        <thead>
                            <tr style={{ color: "white" }}>
                                <th>Keyword Id</th>
                                <th>Keyword Name</th>
                                <th>Display Keyword Information</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                this.state.keywords.map(
                                    keyword =>
                                        <tr key={keyword.id}>
                                            <td style={{ color: "white" }}> {keyword.id}</td>
                                            <td style={{ color: "white" }}> {keyword.name}</td>
                                            {/*<td ><button className="btn btn-light" onClick={this.displayWord} value={this.temp}><b>Info about {this.temp}</b></button></td>*/}
                                            <td><button className="btn btn-light" onClick={() => { this.displayWordParam(keyword.name); }}><b>{keyword.name} Info</b></button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div>
                        <button className="btn btn-light" onClick={this.list}><b>Back</b></button>
                    </div>
                    <p style={{color:"darkred"}}>Note: Refresh the page if you cannot see information</p>
                </div>
            </div>
        );
    }
}

export default KeywordList;

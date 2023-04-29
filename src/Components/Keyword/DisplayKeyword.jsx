import React, { Component } from 'react';
import DictionaryService from '../../Services/DictionaryService';
import AliceCarousel from 'react-alice-carousel';

class DisplayKeyword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keywords: [],
            empty: false,
            show: false
        }
        this.list = this.list.bind(this);
    }

    componentDidMount() {
        DictionaryService.searchKeyword().then((res) => {
            this.setState({
                keywords: res.data
            })
            console.log("result data displayjsx...", res.data);
            console.log("keyword data displayjsx...", this.state.keywords.name);
            if (this.state.keywords.name === undefined) {
                this.setState({ empty: true, show: false })
                alert("Keyword does not exist!");
                this.props.history.goBack();
            }
            else {
                this.setState({ empty: false, show: true })
            }
        })
    }

    list() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="row" >
                <div>
                    <div style={{ position: 'absolute', right: '30px', top: '15px' }}>
                        <button className="btn btn-light" onClick={this.list}><b>Back</b></button>
                    </div>
                    {this.state.show ?
                        <div style={{ position: 'relative', top: '40px', fontSize: '18px', color: "white" }}> {this.state.empty ? "" : <div>
                            <p></p>
                            <center><h2>{this.state.keywords.name}</h2></center>
                            <p><b>Invented by: </b>{this.state.keywords.inventor} <br />
                                <b>Year of Invention: </b>{this.state.keywords.inventionyear} <br />
                                <b>Description: </b>{this.state.keywords.description} <br />
                                <b>Advantages: </b>{this.state.keywords.advantages} <br />
                                <b>Disadvantages: </b>{this.state.keywords.disadvantages}</p>
                            <p></p>
                            <AliceCarousel autoPlay autoPlayInterval="3000">
                                <center><img src={this.state.keywords.url1} alt="image1" className="sliderimg" /></center>
                                <center><img src={this.state.keywords.url2} alt="image2" className="sliderimg" /></center>
                                <center><img src={this.state.keywords.url3} alt="image3" className="sliderimg" /></center>
                                <center><img src={this.state.keywords.url4} alt="image4" className="sliderimg" /></center>
                                <center><img src={this.state.keywords.url5} alt="image5" className="sliderimg" /></center>
                                <center><img src={this.state.keywords.url6} alt="image6" className="sliderimg" /></center>
                            </AliceCarousel> </div>}
                        </div> : <p> </p>}
                </div>
            </div>
        );
    }
}

export default DisplayKeyword;

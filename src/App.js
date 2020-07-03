import React, { Component } from "react";
import "./App.scss";
import axios from "axios";
import FactCard from './component/FactCard';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateFact: [],
      yearFact: [],
      numberFact: [],
    };
  }
  handleClickDate = () => {
    this.getDateFact();
  };
  handleClickYear = () => {
    this.getYearFact();
  };
  handleChange = (event) => {
    this.getNumFact(event.target.value);
  };
  getDateFact = () => {
    axios.get(`http://numbersapi.com/random/date`).then((res) => {
      console.log(res.data);
      this.setState({ dateFact: res.data });
    });
  };
  getYearFact = () => {
    axios.get(`http://numbersapi.com/random/year`).then((res) => {
      console.log(res.data);
      this.setState({ yearFact: res.data });
    });
  };
  getNumFact = (number) => {
    axios.get(`http://numbersapi.com/${number}`).then((res) => {
      console.log(res.data);
      this.setState({ numberFact: res.data });
    });
  };
  render() {
    return (
      <div className="app">
        <h1 className="app__title">Fact Attack</h1>
        <img className='app__img' src="./assets/animat-lightbulb-color.gif" alt="Lightbulb gif" />
        <div className="button__container">
          <button onClick={this.handleClickDate} className="app__button">
            Give me Datefact
          </button>
          <button onClick={this.handleClickYear} className="app__button">
            Give me Yearfact
          </button>
        </div>
          <FactCard fact={this.state.dateFact} />
          <FactCard fact={this.state.yearFact} />
          <h2 className="app__label">Try it out!</h2>
          <input
            className="app__input"
            // name="numberFactInput"
            type="range" name="vol" min="-50" max="50"
            onChange={this.handleChange}
          />
        <div className="numberFact">{this.state.numberFact}</div>
      </div>
    );
  }
}
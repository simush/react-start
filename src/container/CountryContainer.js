import React, { Component } from 'react';

import Country from '../component/Country';
import './CountryContainer.css';
import Dialog from '../component/Dialog';
import { stat } from 'fs';

class CountryContainer extends Component {
  state = {
    data: [],
    isOpen: false
  }
  componentWillMount = () => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(result => this.setState({ data: result }))
      .catch(err => console.log(err));
  }
  deleteCountry = (index) => {
    let data = this.state.data;
    data.splice(index, 1);

    this.setState({ data });
    return index;
  }
  showCountry = (index) => {
    let data = this.state.data;
    return index;

  }

  openDialog = () => {
    this.setState({ isOpen: true })
  }
  closeFunc = () => {
    this.setState({ isOpen: false })
  }

  render() {
    return (

      <ul className="country-list">
        {/* <Dialog
            data={this.state.data}
            isOpen={this.state.isOpen}
            closeFunc={() => this.closeFunc()}
            showCountry={() => this.showCountry()}
          />           */}
        <button className="searchBtn" onClick={() => this.openDialog()}>Search</button>

        <input type="text" placeholder="Add Country" />
        {this.state.data.map((item, index) =>
          <Country
            state={this.state}
            key={index}
            data={item}
            isOpen={this.state.isOpen}
            closeFunc={() => this.closeFunc()}
            deleteCountry={() => this.deleteCountry(index)}
            showCountry={() => this.showCountry(index)}
          />
        )}
      </ul>
    );
  }
}

export default CountryContainer;
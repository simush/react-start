import React, { Component } from 'react';

import Country from '../component/Country';
import './CountryContainer.css';

class CountryContainer extends Component {
  state = {
    data: []
  }
  componentWillMount = () => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(result => this.setState({ data: result }))
      .catch(err => console.log(err));
  }
  deleteCountry = (index) =>{
    let data = this.state.data
    data.splice(index,1);
    
    this.setState({data});
  }
  render() {
    return (
      <ul className="country-list">
        {this.state.data.map((item, index) =>
          <Country
            data={item}
            deleteCountry={() => this.deleteCountry(index)}
          />
        )}
      </ul>
    );
  }
}

export default CountryContainer;
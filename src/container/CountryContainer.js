import React, { Component } from 'react';

import Country from '../component/Country';
import './CountryContainer.css';
import Dialog from '../component/Dialog';

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
  // deleteCountry = (index) =>{
  //   let data = this.state.data
  //   data.splice(index,1);
    
  //   this.setState({data});
  // }
  showCountry = (index) => {
    let data = this.state.data;
    alert(`${data[index].name}\n 
      ${data[index].capital}\n
      ${data[index].population}`)
  }

  someText = (text) =>{
    let b = "Hello EveryBody";
    return b;
  }

  render() {
    return (
      <ul className="country-list">
        <Dialog
          someText={this.someText()}
         />
        <input type="text" placeholder="Add Country"/>
        <button onClick={(e) => this.setState({isOpen:true})}>Search</button>
        {this.state.data.map((item, index) =>
          <Country
            key={index}
            data={item}
           /* deleteCountry={() => this.deleteCountry(index)} */
            showCountry={() => this.showCountry(index)}
          />
        )}
      </ul>
    ); 
  }
}

export default CountryContainer;
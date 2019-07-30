import React, { Component } from 'react';

import Country from '../component/Country';
import './CountryConteiner.css';

class CountryConteiner extends Component {
    state = {
        data: []
    }
    componentWillMount = () => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(responce => responce.json())
        .then(result => this.setState({data: result}))
        .catch(err => console.error(err));
    }
    render(){
        return(
            <ul className="country-list">
                {this.state.data.map(item => <Country data={item} />)}
            </ul>
        );
    }
}

export default CountryConteiner;
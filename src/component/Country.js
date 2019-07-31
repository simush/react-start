import React from 'react';

function Country(props) {
  return (
    <button onClick={props.deleteCountry} >
      {props.data.name}
      <img alt={props.data.name} src={props.data.flag}></img>
      {props.data.capital}</button>
  );
}

export default Country;
import React from 'react';

function Country(props) {
  return (
    // {/* <button onClick={props.deleteCountry} > */}
    <div onClick={props.showCountry} >
      {props.data.name}
      {props.data.callingCodes}
      <img alt={props.data.name} src={props.data.flag}></img>
      {props.data.capital}</div>
  );
}

export default Country;
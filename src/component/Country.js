import React, { Component } from 'react';

class Country extends Component {

  getIndex = () => {
    let index = this.props.deleteCountry;
    console.log(index);
  }

  render() {
    let a = (
      <div>
        <div className="Dialog">
          <button
            className="buttonStyle"
            onClick={this.props.closeFunc}
          >Ok
          </button>
          <div onClick={this.props.showCountry}>
            {this.props.data.name}
          </div>
        </div>
      </div>
    )
    if (!this.props.isOpen) {
      a = null;
    }
    return (
      <div>
        <div>
          {this.props.data.name}
          {this.props.data.callingCodes}
          <img alt={this.props.data.name} src={this.props.data.flag}></img>
          {this.props.data.capital}
        </div>
        <button
          onClick={this.props.deleteCountry}
        >Delete
        </button>
        <div>
          {this.getIndex()}
          {a}
        </div>
      </div>
    );
  }
}

export default Country;
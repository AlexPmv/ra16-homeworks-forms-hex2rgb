import React, { Component } from 'react';


export default class HexToRgbConverter extends Component{
  constructor(props) {
    super(props);
    this.state = {color: '#000000'};
    this.changeColor = this.changeColor.bind(this);
    this.convertToRgb = this.convertToRgb.bind(this);
  }

  convertToRgb(value) {
    const r = '0x' + value[1] + value[2];
    const g = '0x' + value[3] + value[4];
    const b = '0x' + value[5] + value[6];

    return 'rgb('+ +r + ', ' + +g + ', ' + +b + ')';
  }

  changeColor(e) {
    const regExp = '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$';
    const result = document.querySelector('.result-rgb');
    let value = e.target.value;
    result.value = '';

    if (value === '') {
      e.target.value = '#'
      return
    }

    if (value.length < 7) {
      return;
    }

    if (value.match(regExp)) {
      this.setState({color: value})
      result.value = this.convertToRgb(value);
    } else {
      result.value = 'ERROR!';
    }
  }

  render() {
    return (
      <div className="wrapper" style={{backgroundColor: this.state.color}}>
        <label className='label'>
          <input className="color-input" placeholder="Enter color" onChange={this.changeColor} maxLength="7" defaultValue="#"></input>
          <input className="result-rgb" readOnly></input>
        </label>
      </div>
    )  
  }
}
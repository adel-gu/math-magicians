import PropTypes from 'prop-types';
import { Component } from 'react';
import calculate from "../logic/calculate";

// Sub Components => {Screen, oprands, Numbers}
const Screen = ({ result }) => <span className="screen">{result}</span>;
Screen.propTypes = { result: PropTypes.string.isRequired };

const Oprand = ({ className, data, onclick}) => (
  <button type="button" className={className} onClick={onclick}>
    {data}
  </button>
);
Oprand.propTypes = { className: PropTypes.string.isRequired };
Oprand.propTypes = { data: PropTypes.string.isRequired };

const Number = ({ value, className , onClick}) => (
  <button type="button" className={className} onClick={onClick}>
    {value}
  </button>
);
Number.propTypes = { value: PropTypes.string.isRequired };
Number.propTypes = { className: PropTypes.string};

// Calculator Component
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oprands: [],
      numValues: [0,1,2,3,4,5,6,7,8,9],
      calculator: {
        total: null,
        next: null,
        operation: null
      },
      oprandIsPressed: false
    }
  }

  // Render the screen component
  renderScreen = () => {
    return (
      <Screen result={(this.state.calculator.total) ? this.state.calculator.total: '0'}/>
    )
  }

  // Show the clicked number
  handlTotal = (number) => {
    let total = (this.state.calculator.total) ? this.state.calculator.total : '';
    this.setState({calculator: { total: total + number.toString()}});
  }

  // Render the numbers component
  renderNumber = (i, className) => {
    return (
      <Number 
        value={i} 
        className={className}
        onClick= {() => this.handlTotal(i)}
      />
    )
  }

  // renderOprand = (data, className) => {
  //   return (
  //     <Number value={i} className={className}/>
  //   )
  // }

  // Render all calculator components
  render() {
    return (
      <div className="calculator">
        {this.renderScreen()}
        {/* First row */}
        <Oprand data="AC"/>
        <Oprand data="+/-" />
        <Oprand data="%" />
        <Oprand data="+" className="orang" />
        {/* Seccond row */}
        {this.renderNumber(7)}
        {this.renderNumber(8)}
        {this.renderNumber(9)}
        <Oprand data="*" className="orang" />
        {/* 3rd row */}
        {this.renderNumber(4)}
        {this.renderNumber(5)}
        {this.renderNumber(6)}
        <Oprand data="-" className="orang" />
        {/* 4th row */}
        {this.renderNumber(1)}
        {this.renderNumber(2)}
        {this.renderNumber(3)}
        <Oprand data="+" className="orang" />
        {/* 5th row */}
        {this.renderNumber(0, 'numberZero')}
        <Number value="." />
        <Oprand data="=" className="orang" />
      </div>
    );
  }
}

export default Calculator;

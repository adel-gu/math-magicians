import PropTypes from 'prop-types';
import { Component } from 'react';

const Screen = ({ result }) => <span className="screen">{result}</span>;
Screen.propTypes = { result: PropTypes.number.isRequired };

const Oprand = ({ className, data }) => (
  <button type="button" className={className}>
    {data}
  </button>
);
Oprand.propTypes = { className: PropTypes.string.isRequired };
Oprand.propTypes = { data: PropTypes.string.isRequired };

const Number = ({ className, value }) => (
  <button type="button" className={className}>
    {value}
  </button>
);
Number.propTypes = { className: PropTypes.string.isRequired };
Number.propTypes = { value: PropTypes.number.isRequired };

// Calculator
/* eslint-disable */
class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <Screen result="0" />
        {/* First row */}
        <Oprand data="AC" />
        <Oprand data="+/-" />
        <Oprand data="%" />
        <Oprand data="+" className="orang" />
        {/* Seccond row */}
        <Number value="7" />
        <Number value="8" />
        <Number value="9" />
        <Oprand data="*" className="orang" />
        {/* 3rd row */}
        <Number value="4" />
        <Number value="5" />
        <Number value="6" />
        <Oprand data="-" className="orang" />
        {/* 4th row */}
        <Number value="1" />
        <Number value="2" />
        <Number value="3" />
        <Oprand data="+" className="orang" />
        {/* 5th row */}
        <Number value="0" className="numberZero" />
        <Number value="." />
        <Oprand data="=" className="orang" />
      </div>
    );
  }
}

export default Calculator;

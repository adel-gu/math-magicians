import PropTypes from 'prop-types';
import { Component } from 'react';
import calculate from "../logic/calculate";

// Sub Components => {Screen, oprands, Numbers}
const Screen = ({ result }) => <span className="screen">{result}</span>;
Screen.propTypes = { result: PropTypes.string.isRequired };

const Oprand = ({ data, className, onclick}) => (
  <button type="button" className={className} onClick={onclick}>
    {data}
  </button>
);
Oprand.propTypes = { data: PropTypes.string.isRequired };
Oprand.propTypes = { className: PropTypes.string };
Oprand.propTypes = { onclick: PropTypes.func.isRequired };

const Number = ({ value, className , onclick}) => (
  <button type="button" className={className} onClick={onclick}>
    {value}
  </button>
);
Number.propTypes = { value: PropTypes.string.isRequired };
Number.propTypes = { className: PropTypes.string};
Number.propTypes = { onclick: PropTypes.func.isRequired};

// Calculator Component
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numValues: [0,1,2,3,4,5,6,7,8,9,'.'],
      screen: '0',
      calculator: {
        total: '0',
        next: null,
        operation: null,
      },
    }
  }

  // Calculation method
  handlCalculation = (buttonName) => {
    const result = calculate(this.state.calculator, buttonName.toString());
    this.setState({calculator: {...result}})
  }

  // Render the calculated result on the screen component.
  renderScreen = () => {
    let total = this.state.calculator.total;
    let next = this.state.calculator.next;
    let operation = this.state.calculator.operation;

    let screen = `${total || ''}${operation || ''}${next || ''}`;
    // If all the properties are null 
    if (!(total || next || operation)) {
      screen = "0";
    }
    
    return (
      <Screen result={screen}/>
    )
  }

  // Render the numbers component
  renderNumber = (i, className) => {
    return (
      <Number 
        value={this.state.numValues[i]} 
        className={className}
        onclick= {() => this.handlCalculation(this.state.numValues[i])}
      />
    )
  }

  // Render Oprands
  renderOprand = (data, className) => {
    return (
      <Oprand 
        data={data} 
        className={className}
        onclick= {() => this.handlCalculation(data)}
      />
    )
  }

  // Render all calculator components
  render() {
    return (
      <div className="calculator">
        {this.renderScreen()}
        {/* First row */}
        {this.renderOprand('AC')}
        {this.renderOprand('+/-')}
        {this.renderOprand('%')}
        {this.renderOprand('÷', "orang")}
        {/* Seccond row */}
        {this.renderNumber(7)}
        {this.renderNumber(8)}
        {this.renderNumber(9)}
        {this.renderOprand('x', "orang")}
        {/* 3rd row */}
        {this.renderNumber(4)}
        {this.renderNumber(5)}
        {this.renderNumber(6)}
        {this.renderOprand('-', "orang")}
        {/* 4th row */}
        {this.renderNumber(1)}
        {this.renderNumber(2)}
        {this.renderNumber(3)}
        {this.renderOprand('+', "orang")}
        {/* 5th row */}
        {this.renderNumber(0, 'numberZero')}
        {this.renderNumber(10)}
        {this.renderOprand('=', "orang")}
      </div>
    );
  }
}

export default Calculator;

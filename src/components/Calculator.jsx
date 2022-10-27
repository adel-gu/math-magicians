import { useState } from 'react';
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
const Calculator = () => {
  const [calculator, setCalculator] = useState({
    total: '0',
    next: null,
    operation: null
  });
  // Numbers
  const numValues = [0,1,2,3,4,5,6,7,8,9,'.'];

  // Calculation method
  const handlCalculation = (buttonName) => {
    const result = calculate(calculator, buttonName.toString());
    setCalculator({...result})
  }

  // Render the calculated result on the screen component.
  const renderScreen = () => {
    let total = calculator.total;
    let next = calculator.next;
    let operation = calculator.operation;

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
  const renderNumber = (i, className) => {
    return (
      <Number 
        value={numValues[i]} 
        className={className}
        onclick= {() => handlCalculation(numValues[i])}
      />
    )
  }

  // Render Oprands
  const renderOprand = (data, className) => {
    return (
      <Oprand 
        data={data} 
        className={className}
        onclick= {() => handlCalculation(data)}
      />
    )
  }

  // Render all calculator components
  return (
    <div className="calculator">
      {renderScreen()}
      {/* First row */}
      {renderOprand('AC')}
      {renderOprand('+/-')}
      {renderOprand('%')}
      {renderOprand('÷', "orang")}
      {/* Seccond row */}
      {renderNumber(7)}
      {renderNumber(8)}
      {renderNumber(9)}
      {renderOprand('x', "orang")}
      {/* 3rd row */}
      {renderNumber(4)}
      {renderNumber(5)}
      {renderNumber(6)}
      {renderOprand('-', "orang")}
      {/* 4th row */}
      {renderNumber(1)}
      {renderNumber(2)}
      {renderNumber(3)}
      {renderOprand('+', "orang")}
      {/* 5th row */}
      {renderNumber(0, 'numberZero')}
      {renderNumber(10)}
      {renderOprand('=', "orang")}
    </div>
  );
}

export default Calculator;

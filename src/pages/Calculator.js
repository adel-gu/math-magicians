import { useState } from 'react';
// Logic
import calculate from '../logic/calculate';
// Calculator components
import { Screen, Number, Oprand } from '../components/CalculatorParts';

// Stylesheets
import '../styles/Calculator.css';

// Calculator Component
const Calculator = () => {
  const [calculator, setCalculator] = useState({
    total: '0',
    next: null,
    operation: null,
  });
  // Numbers
  const numValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'];

  // Calculation method
  const handlCalculation = (buttonName) => {
    const result = calculate(calculator, buttonName.toString());
    setCalculator({ ...result });
  };

  // Render the calculated result on the screen component.
  const renderScreen = () => {
    const { total } = calculator;
    const { next } = calculator;
    const { operation } = calculator;

    let screen = `${total || ''}${operation || ''}${next || ''}`;
    // If all the properties are null
    if (!(total || next || operation)) {
      screen = '0';
    }

    return <Screen result={screen} />;
  };

  // Render the numbers component
  const renderNumber = (i, className) => (
    <Number
      value={numValues[i]}
      className={className}
      onclick={() => handlCalculation(numValues[i])}
    />
  );

  // Render Oprands
  const renderOprand = (data, className) => (
    <Oprand
      data={data}
      className={className}
      onclick={() => handlCalculation(data)}
    />
  );

  // Render all calculator components
  return (
    <main>
      <div className="container flex justify-between">
        <h1>Lets do some math!</h1>
        <div className="calculator">
          {renderScreen()}
          {/* First row */}
          {renderOprand('AC')}
          {renderOprand('+/-')}
          {renderOprand('%')}
          {renderOprand('÷', 'orang')}
          {/* Seccond row */}
          {renderNumber(7)}
          {renderNumber(8)}
          {renderNumber(9)}
          {renderOprand('x', 'orang')}
          {/* 3rd row */}
          {renderNumber(4)}
          {renderNumber(5)}
          {renderNumber(6)}
          {renderOprand('-', 'orang')}
          {/* 4th row */}
          {renderNumber(1)}
          {renderNumber(2)}
          {renderNumber(3)}
          {renderOprand('+', 'orang')}
          {/* 5th row */}
          {renderNumber(0, 'numberZero')}
          {renderNumber(10)}
          {renderOprand('=', 'orang')}
        </div>
      </div>
    </main>
  );
};

export default Calculator;

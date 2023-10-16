import React, { useState } from 'react';
import { Button } from './Button';
import { Screen } from './Screen';
import buttonsData from './buttonData';
import calculate from '../logic/calculate';

// Stylesheets
import '../styles/Calculator.css';

export const Calculator = () => {
  let obj = {
    total: null,
    next: null,
    operation: null,
  };

  const [calObj, setCalcObj] = useState(obj);
  const [result, setResult] = useState('0');

  const getBtnData = (data) => {
    obj = calculate(calObj, data);
    setCalcObj(obj);
    let screenResult =
      `${obj.total ?? ''}${obj.operation ?? ''}${obj.next ?? ''}` || '0';
    setResult(screenResult);
  };

  return (
    <div className="calculator">
      <Screen result={result} />
      {buttonsData.map((btnData) => (
        <Button
          key={`${btnData.data}`}
          data={btnData.data}
          width={btnData.width}
          color={btnData.color}
          columnPos={btnData.columnPos}
          rowPos={btnData.rowPos}
          isOperation={btnData.isOperation}
          getBtnData={getBtnData}
        />
      ))}
    </div>
  );
};

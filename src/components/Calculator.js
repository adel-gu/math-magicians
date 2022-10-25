import '../App.css';

const Screen = (props) => {
  return <span className='screen'>{props.result}</span>;
};

const Oprand = ({ data, className }) => {
  return <button className={className}>{data}</button>;
};

const Number = ({ value, className }) => {
  return <button className={className}>{value}</button>;
};

// Calculator

const Calculator = () => {
  return (
    <div className='calculator'>
      <Screen result='0' />
      {/* First row */}
      <Oprand data='AC' />
      <Oprand data='+/-' />
      <Oprand data='%' />
      <Oprand data='+' className='orang' />
      {/* Seccond row */}
      <Number value='7' />
      <Number value='8' />
      <Number value='9' />
      <Oprand data='*' className='orang' />
      {/* 3rd row */}
      <Number value='4' />
      <Number value='5' />
      <Number value='6' />
      <Oprand data='-' className='orang' />
      {/* 4th row */}
      <Number value='1' />
      <Number value='2' />
      <Number value='3' />
      <Oprand data='+' className='orang' />
      {/* 5th row */}
      <Number value='0' className='numberZero' />
      <Number value='.' />
      <Oprand data='=' className='orang' />
    </div>
  );
};

export default Calculator;

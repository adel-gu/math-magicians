import PropTypes from 'prop-types';
// Sub Components => {Screen, oprands, Numbers}
const Screen = ({ result }) => <span className="screen">{result}</span>;
Screen.propTypes = { result: PropTypes.string.isRequired };

// Oprands buttons components
const Oprand = ({ data, className, onclick}) => (
  <button type="button" className={className} onClick={onclick}>
    {data}
  </button>
);
Oprand.propTypes = { data: PropTypes.string.isRequired };
Oprand.propTypes = { className: PropTypes.string };
Oprand.propTypes = { onclick: PropTypes.func.isRequired };

// Numbers buttons components
const Number = ({ value, className , onclick}) => (
  <button type="button" className={className} onClick={onclick}>
    {value}
  </button>
);
Number.propTypes = { value: PropTypes.string.isRequired };
Number.propTypes = { className: PropTypes.string};
Number.propTypes = { onclick: PropTypes.func.isRequired};

export {Screen, Oprand, Number};
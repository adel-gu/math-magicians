import React from 'react';
import PropTypes from 'prop-types';

// Stylesheets
import '../styles/Calculator.css';

export const Button = ({
  data,
  width,
  color,
  columnPos,
  rowPos,
  getBtnData,
}) => {
  const btnStyle = {
    gridColumn: `${columnPos} / span ${width}`,
    gridRow: rowPos,
  };
  return (
    <button
      style={btnStyle}
      className={`btn ${color}`}
      onClick={() => getBtnData(data)}
    >
      {data}
    </button>
  );
};

Button.defaultProps = {
  width: 1,
};

Button.propTypes = {
  data: PropTypes.string.isRequired,
  width: PropTypes.number,
  color: PropTypes.string,
  columnPos: PropTypes.number,
  rowPos: PropTypes.number,
  getBtnData: PropTypes.func.isRequired,
};

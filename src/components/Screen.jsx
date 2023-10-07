import React from 'react';
import PropTypes from 'prop-types';

// Stylesheets
import '../styles/Calculator.css';

export const Screen = ({ result }) => {
  return <span className="screen">{result}</span>;
};

Screen.defaultProps = {
  result: 0,
};

Screen.prototypes = {
  result: PropTypes.number,
};

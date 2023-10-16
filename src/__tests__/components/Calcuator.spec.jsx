import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Calculator } from '../../components/Calculator';

beforeEach(() => {
  render(<Calculator />);
});

const calculatorButtonsClicked = (arr) => {
  arr.map((data) => {
    const buttonElement = screen.getByText(data);
    fireEvent.click(buttonElement);
  });
};

describe('Calculator', () => {
  it('should render all calculator components', () => {
    const screenElement = screen.getByTestId('screenTestId');
    const buttonElements = screen.getAllByTestId('buttonTestId');

    expect(screenElement).toBeInTheDocument();
    expect(buttonElements.length).toBe(19);
  });

  it('should set screen initial innerTextContent to "0"', () => {
    const screenElement = screen.getByTestId('screenTestId');

    expect(screenElement.textContent).toBe('0');
  });

  it('should set screen innerTextContent to button data value when buttons are clicked', () => {
    const screenElement = screen.getByTestId('screenTestId');
    calculatorButtonsClicked(['1']);

    expect(screenElement.textContent).toBe('1');
  });

  it('should set screen innerTextContent to button data value when buttons are clicked continuously', () => {
    const screenElement = screen.getByTestId('screenTestId');

    calculatorButtonsClicked(['1', '2', '+']);
    expect(screenElement.textContent).toBe('12+');
  });

  it('should set screen innerTextContent to calculation result when "=" button clicked', () => {
    const screenElement = screen.getByTestId('screenTestId');

    calculatorButtonsClicked(['1', '+', '2', '=']);
    expect(screenElement.textContent).toBe('3');
  });

  it('should set screen innerTextContent to calculation result when "+" button clicked second time after inserting second number', () => {
    const screenElement = screen.getByTestId('screenTestId');

    calculatorButtonsClicked(['1', '+', '2', '+']);
    expect(screenElement.textContent).toBe('3+');
  });

  it('should set screen innerTextContent to "0" when "AC" is clicked', () => {
    const screenElement = screen.getByTestId('screenTestId');

    calculatorButtonsClicked(['1', '+', '2', '=']);
    calculatorButtonsClicked(['AC']);
    expect(screenElement.textContent).toBe('0');
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

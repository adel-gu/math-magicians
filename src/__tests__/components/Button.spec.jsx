import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Button } from '../../components/Button';

const mockGetBtnData = jest.fn();

beforeEach(() => {
  render(<Button data="0" getBtnData={mockGetBtnData} />);
});

describe('Button', () => {
  it('should render the button', () => {
    const buttonElement = screen.getByText(/0/i);

    expect(buttonElement).toHaveTextContent('0');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should call mockGetBtnData with data', () => {
    const buttonElement = screen.getByText(/0/i);

    fireEvent.click(buttonElement);
    expect(mockGetBtnData).toBeCalledWith('0');
  });

  it('should match the snapshot', () => {
    const buttonElement = renderer.create(
      <Button data="0" getBtnData={mockGetBtnData} />,
    );

    expect(buttonElement).toMatchSnapshot();
  });
});

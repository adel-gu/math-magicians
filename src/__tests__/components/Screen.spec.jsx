import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Screen } from '../../components/Screen';

describe('Screen', () => {
  it('should render the screen', () => {
    render(<Screen result={0} />);

    const screenElement = screen.getByText(/0/i);

    expect(screenElement).toHaveTextContent('0');
    expect(screenElement).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const screenElement = renderer.create(<Screen result={0} />).toJSON();

    expect(screenElement).toMatchSnapshot();
  });
});

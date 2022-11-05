import { render, screen } from '@testing-library/react';
import Calculator from '../pages/Calculator';

describe('Testing the Calculator component:', () => {
  test('should renerd correctly', () => {
    render(<Calculator />);
    expect(screen).toMatchSnapshot();
  });
});

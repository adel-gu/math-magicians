import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

describe('Testing the Home page:', () => {
  test('should renerd correctly', () => {
    render(<Home />);
    expect(screen).toMatchSnapshot();
  });
});

import { render, screen } from '@testing-library/react';
import Quote from '../pages/Quote';

describe('Testing the Quote page:', () => {
  test('should renerd correctly', () => {
    render(<Quote />);
    expect(screen).toMatchSnapshot();
  });
});

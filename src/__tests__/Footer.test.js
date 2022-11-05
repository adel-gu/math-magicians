import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Testing the Footer component:', () => {
  test('should renerd correctly', () => {
    render(<Footer />);
    expect(screen).toMatchSnapshot();
  });
});

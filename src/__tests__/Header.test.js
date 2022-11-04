import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Testing the Header component:', () => {
  test('should renerd correctly', () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen).toMatchSnapshot();
  });
});

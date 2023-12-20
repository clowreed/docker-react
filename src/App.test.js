import { render, screen } from '@testing-library/react';
import App from './App';

test('Find Pepper on the screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pepper/i);
  expect(linkElement).toBeInTheDocument();
});

test('Find Minnow on the screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Minnow/i);
  expect(linkElement).toBeInTheDocument();
});

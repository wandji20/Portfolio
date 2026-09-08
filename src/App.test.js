import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the profile name', () => {
  render(<App />);
  expect(screen.getByText(/Wandji Bertrand_/i)).toBeInTheDocument();
});

test('renders the OneView Properties project', () => {
  render(<App />);
  expect(screen.getAllByText(/OneView Properties/i).length).toBeGreaterThan(0);
});

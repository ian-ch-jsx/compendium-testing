import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const title = screen.getByText(/ghibli compendium/i);
  expect(title).toBeInTheDocument();
});

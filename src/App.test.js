import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Compendium from './views/Compendium/Compendium';

test('renders header', () => {
  render(<App />);
  const title = screen.getByText(/ghibli compendium/i);
  expect(title).toBeInTheDocument();
});

test.only('order should change with select menu', async () => {
  render(<Compendium />);

  const controls = await screen.findByRole('combobox');
  const option = await screen.findByRole('option', { name: 'newest' });

  userEvent.selectOptions(controls, option);
  expect(option.selected).toBe(true);
});

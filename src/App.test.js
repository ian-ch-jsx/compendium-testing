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
  // const filmcards = await screen.findAllByAltText('cover-art', { timeout: 7000 });
  // // screen.debug(filmcards);
  // expect(await filmcards[0].src).toContain(
  //   'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sJhFtY3eHuvvACaPpxpzdCLQqpQ.jpg'
  // );
});

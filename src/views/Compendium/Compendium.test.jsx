import { screen, render } from '@testing-library/react';
import Compendium from './Compendium';

test('film list is rendered to the page', async () => {
  render(<Compendium />);

  const loading = screen.getByText(/loading.../i);
  expect(loading).toBeInTheDocument();

  const filmCard = await screen.findAllByRole('img');
  expect(filmCard).toHaveLength(22);
});

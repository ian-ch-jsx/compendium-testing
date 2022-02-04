import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Compendium from './views/Compendium/Compendium';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

test('renders header', () => {
  render(<App />);
  const title = screen.getByText(/ghibli compendium/i);
  expect(title).toBeInTheDocument();
});

const filmList = [
  {
    id: '7',
    title: 'Pans Labyrinth oldest',
    image: 'firstimage.jpg',
    release_date: '200',
  },
  {
    id: '71',
    title: 'Pans Labyrinth 2',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTg5ODQxODI4M15BMl5BanBnXkFtZTcwODk2MzA1OQ@@._V1_.jpg',
    release_date: '2006',
  },
  {
    id: '12',
    title: 'Pans Labyrinth newest',
    image: 'lastimage.jpg',
    release_date: '2032',
  },
];

const server = setupServer(
  rest.get('https://ghibliapi.herokuapp.com/films', (req, res, ctx) => {
    return res(ctx.json([filmList]));
  })
);

beforeAll(() => server.listen());

afterAll(() => server.close());

test.only('order should change with select menu', async () => {
  render(<Compendium filmList={filmList} />);

  const controls = await screen.findByRole('combobox');
  const option = await screen.findByRole('option', { name: 'newest' });

  userEvent.selectOptions(controls, option);
  expect(option.selected).toBe(true);

  const filmcards = await screen.findAllByAltText('cover-art');

  screen.debug(filmcards[0].src);

  expect(await filmcards[0].src).toContain('newestimage.jpg');
});

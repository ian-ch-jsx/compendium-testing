import { screen, render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Compendium from './Compendium';

const filmList = [
  {
    id: '7',
    title: 'Pans Labyrinth',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTg5ODQxODI4M15BMl5BanBnXkFtZTcwODk2MzA1OQ@@._V1_.jpg',
    release_date: '2006',
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
    title: 'Pans Labyrinth 3',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTg5ODQxODI4M15BMl5BanBnXkFtZTcwODk2MzA1OQ@@._V1_.jpg',
    release_date: '2006',
  },
];

const server = setupServer(
  rest.get('https://ghibliapi.herokuapp.com/films', (req, res, ctx) => {
    return res(ctx.json(filmList));
  })
);

beforeAll(() => server.listen());

afterAll(() => server.close());

test('film list is rendered to the page', async () => {
  render(<Compendium filmList={filmList} />);

  const filmCard = await screen.findAllByRole('img');
  expect(filmCard).toHaveLength(filmList.length);
});

import { render, screen } from '@testing-library/react';
import FilmList from './FilmList';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const films = {
  id: '7',
  title: 'Pans Labyrinth',
  image:
    'https://m.media-amazon.com/images/M/MV5BMTg5ODQxODI4M15BMl5BanBnXkFtZTcwODk2MzA1OQ@@._V1_.jpg',
  release_date: '2006',
};

const server = setupServer(
  rest.get('https://ghibliapi.herokuapp.com/films', (req, res, ctx) => {
    return res(ctx.json([films]));
  })
);

beforeAll(() => server.listen());

afterAll(() => server.close());

test('should render a film card', async () => {
  render(<FilmList films={[films]} />);

  const filmTitle = await screen.getByRole('heading', { name: films.title });
  expect(filmTitle).toBeInTheDocument();

  const filmImage = screen.getByAltText(/cover-art/i);
  expect(filmImage).toBeInTheDocument();
});

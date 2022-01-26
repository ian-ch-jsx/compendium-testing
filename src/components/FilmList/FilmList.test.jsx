import { render, screen } from '@testing-library/react';
import FilmList from './FilmList';

const films = {
  id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
  title: 'Castle in the Sky',
  image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg',
  release_date: '1986',
};

test('should render a film card', async () => {
  render(<FilmList films={[films]} />);

  const filmTitle = await screen.getByRole('heading', { name: films.title });
  expect(filmTitle).toBeInTheDocument();

  const filmImage = screen.getByAltText(/cover-art/i);
  expect(filmImage).toBeInTheDocument();
});

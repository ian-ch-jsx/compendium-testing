export async function getFilms() {
  const resp = await fetch('https://ghibliapi.herokuapp.com/films');
  const data = await resp.json();
  return data;
}

export async function getFilmRelease() {
  const resp = await fetch('https://ghibliapi.herokuapp.com/films');
  const data = await resp.json();
  const releaseDate = data.map((date) => ({
    release: date.release_date,
  }));
  console.log(releaseDate);
}

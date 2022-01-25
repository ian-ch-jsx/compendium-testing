export async function getFilms() {
  const resp = await fetch('https://ghibliapi.herokuapp.com/films');
  const data = await resp.json();
  return data;
}

export async function filmDesc() {
  const resp = await fetch('https://ghibliapi.herokuapp.com/films');
  const data = await resp.json();
  data.map((date) => ({
    release: date.release_date,
  }));
  return data.reverse();
}

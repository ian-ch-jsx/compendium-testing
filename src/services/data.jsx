export async function getFilms() {
  const resp = await fetch('https://ghibliapi.herokuapp.com/films');
  const data = await resp.json();
  return data;
}

export async function filmDesc() {
  console.log('hello');
  const resp = await fetch('https://ghibliapi.herokuapp.com/films');
  const data = await resp.json();
  const release = data.sort((a, b) => {
    return Number(b['release_date']) - Number(a['release_date']);
  });
  return release;
}

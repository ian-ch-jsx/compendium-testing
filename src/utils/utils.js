export function filmDesc(data) {
  const release = data.sort((a, b) => {
    return Number(b['release_date']) - Number(a['release_date']);
  });
  return release;
}

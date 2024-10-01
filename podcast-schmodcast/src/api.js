export async function getRatings() {
  const response = await fetch('http://localhost:3001/api/ratings');
  const data = await response.json();
  return data;
}

export async function getPodcasts() {
  const response = await fetch('http://localhost:3001/api/podcasts');
  const data = await response.json();
  return data;
}

async function getMovie(params) {
  const res = await fetch(`http://localhost:3000/api/movie/${params}`);
  const data = await res.json();
  return data[0];
}
async function movieDetails({ params }) {
  const data = await getMovie(params.movie.toString());
  return <div>{data.name}</div>;
}
export default movieDetails;
//Press Ctrl + shift + r to refresh

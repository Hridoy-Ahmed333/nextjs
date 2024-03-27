//Press Ctrl + shift + r to refresh

async function getAnime(params) {
  console.log(params);
  const res = await fetch(`http://localhost:3000/api/anime/${params}`);
  const data = await res.json();
  return data[0];
}
async function AnimeDetails({ params }) {
  const data = await getAnime(params.anime.toString());
  return <div>{data.name}</div>;
}
export default AnimeDetails;

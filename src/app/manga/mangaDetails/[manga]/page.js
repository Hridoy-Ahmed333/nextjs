async function getManga(params) {
  const res = await fetch(`http://localhost:3000/api/manga/${params}`);
  const data = await res.json();
  return data[0];
}
async function mangaDetails({ params }) {
  const data = await getManga(params.manga.toString());
  return <div>{data.name}</div>;
}
export default mangaDetails;
//Press Ctrl + shift + r to refresh

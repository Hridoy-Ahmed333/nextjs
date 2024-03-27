async function getSeries(params) {
  const res = await fetch(`http://localhost:3000/api/series/${params}`);
  const data = await res.json();
  return data[0];
}
async function seriesDetails({ params }) {
  const data = await getSeries(params.series.toString());
  return <div>{data.name}</div>;
}
export default seriesDetails;
//Press Ctrl + shift + r to refresh

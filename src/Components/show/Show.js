import Link from "next/link";
function Show({ el, content }) {
  return (
    <div>
      <Link href={`/${content}/${content}Details/${el.id}`}>{el.name}</Link>
    </div>
  );
}

export default Show;
//Press Ctrl + shift + r to refresh

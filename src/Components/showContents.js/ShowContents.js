import Show from "../show/Show";

function ShowContents({ data, content }) {
  return (
    <div>
      <ul>
        {data.map((el) => (
          <li key={el.id}>
            <Show el={el} content={content} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowContents;
//Press Ctrl + shift + r to refresh

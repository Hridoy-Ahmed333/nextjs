import CreeateWatchList from "@/Components/createWatchList/CreeateWatchList";
import Link from "next/link";
import "../../app/home.css";
import Search from "./Search";
import ShowContents from "@/Components/showContents.js/ShowContents";

async function getAnime() {
  const res = await fetch(`http://localhost:3000/api/anime`);
  const data = await res.json();
  return data;
}
async function Series() {
  const animes = await getAnime();
  return (
    <div className="flex-container">
      <div className="flex-item flex-item-80">
        <div>
          <Search />
          <CreeateWatchList content="series" />
          <ShowContents data={animes} content="series" />
        </div>
        <p>This container takes up 80% of the space.</p>
      </div>
      <div className="flex-item flex-item-20">
        {/* Content for the second container (20% width) */}
        <p>This container takes up 20% of the space.</p>
      </div>
    </div>
  );
}

export default Series;
//Press Ctrl + shift + r to refresh

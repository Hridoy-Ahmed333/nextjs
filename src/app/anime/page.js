import CreeateWatchList from "@/Components/createWatchList/CreeateWatchList";
import "../../app/home.css";
import Search from "./Search";
import ShowContents from "@/Components/showContents.js/ShowContents";

async function all() {
  const res = await fetch("http://localhost:3000/newApi/anime");
  const data = await res.json();
  return data;
}

async function Anime() {
  const animes = await all();
  return (
    <div className="flex-container">
      <div className="flex-item flex-item-80">
        <div>
          <Search />
          <CreeateWatchList content="anime" />
          <ShowContents data={animes?.result} content="anime" />
        </div>
        <p>This container takes up 80% of the space.</p>
      </div>
      <div className="flex-item flex-item-20">
        <p>This container takes up 20% of the space.</p>
      </div>
    </div>
  );
}

export default Anime;

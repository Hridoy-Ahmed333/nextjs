"use client";
import Link from "next/link";
import "../navComp/nav.css";
import { usePathname } from "next/navigation";
function Nav() {
  const pathName = usePathname();
  return (
    <div className="links">
      <Link href={"/"} className={pathName === "/" ? `active` : ""}>
        Home Page
      </Link>
      <Link href={"/anime"} className={pathName === "/anime" ? `active` : ""}>
        Anime
      </Link>
      <Link href={"/manga"} className={pathName === "/manga" ? `active` : ""}>
        Manga
      </Link>
      <Link href={"/movie"} className={pathName === "/movie" ? `active` : ""}>
        Movie
      </Link>
      <Link href={"/series"} className={pathName === "/series" ? `active` : ""}>
        Series
      </Link>
    </div>
  );
}

export default Nav;
//Press Ctrl + shift + r to refresh

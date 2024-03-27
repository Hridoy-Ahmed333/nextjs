"use client";
import { useRouter } from "next/navigation";
function CreeateWatchList({ content }) {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push(`/${content}/create`)}>
        {content}
      </button>
    </div>
  );
}

export default CreeateWatchList;
//Press Ctrl + shift + r to refresh

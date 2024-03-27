import { NextResponse } from "next/server";

export async function GET(req, content) {
  const data = anime;
  const animeData = data.filter(
    (item) => item.id.toString() === content.params.id
  );
  return NextResponse.json(
    animeData.length === 0 ? "No anime found" : animeData,
    { status: 200 }
  );
}

import { Anime } from "@/lib/model/anime";
import { connectionString } from "@/util/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export const dynamic = "force-dynamic";

//Press Ctrl + shift + r to refresh
export async function GET() {
  try {
    await mongoose.connect(connectionString);
    const data = await Anime.find();
    return NextResponse.json({ result: data, success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false });
  }
}

export async function POST(req) {
  let payload;
  const payloadObject = await req.formData();
  const image = payloadObject.get("image");
  if (image) {
    const byteData = await image.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/Image/${image.name}`;
    await writeFile(path, buffer);
  }
  const oldpayload = Object.fromEntries(payloadObject.entries());
  if (image) {
    payload = { ...oldpayload, image: image.name };
  } else {
    payload = { ...oldpayload, image: "" };
  }

  try {
    await mongoose.connect(connectionString);
    let anime = new Anime(payload);
    const result = await anime.save();
    return NextResponse.json({ success: "True" });
  } catch (error) {
    return NextResponse.json({ success: "False" });
  }
}

//Press Ctrl + shift + r to refresh

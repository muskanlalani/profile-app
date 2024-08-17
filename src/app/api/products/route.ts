import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../../lib/mongodb";
import Product from "../../../../models/Product";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();
    const products = await req.json();
    const savedProducts = await Product.insertMany(products);
    return NextResponse.json(savedProducts);
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong." });
  }
}

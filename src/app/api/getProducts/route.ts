import Product from "../../../../models/Product";
import { connectDB } from "../../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find({});
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong." });
  }
}

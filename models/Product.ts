import mongoose, { Document, Model, Schema } from "mongoose";

interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  currency: string;
  originalPrice: number;
  image: string;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  originalPrice: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;

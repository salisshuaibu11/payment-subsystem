import * as mongoose from "mongoose";
import Product from "./product.interface";

const productSchema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  name: String,
  category: {
    id: mongoose.Types.ObjectId,
    ref: "Category",
  },
  discount: Number,
  amount: Number,
});

const ProductModel = mongoose.model<Product & mongoose.Document>(
  "Product",
  productSchema
);

export default ProductModel;

import "dotenv/config";
import App from "./app";
import ProductController from "./product/product.controller";

const app = new App([new ProductController()]);

app.listen();

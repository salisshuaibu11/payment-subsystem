import * as express from "express";
import Product from "./product.interface";
import productModel from "./product.model";
import CreatePostDto from "./post.dto";

class PostsController {
  public path = "/getdiscount";
  public router = express.Router();
  private product = productModel;

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getDiscount);
  }

  private getDiscount = async (
    request: express.Request,
    response: express.Response
  ) => {
    const PRODUCT_CODE = request.params.code;
    const product = await this.product.find({ code: code });
    let discount = -1;
    if (product.discount) {
      discount = product.discount;
    } else {
      const category = await this.category.find({ id: catego.id });
    }
    response.send(posts);
  };
}

export default PostsController;

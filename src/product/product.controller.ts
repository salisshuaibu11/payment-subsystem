import * as express from "express";
import Product from "./product.interface";
import productModel from "./product.model";
import CreatePostDto from "./product.dto";

class ProductController {
  public path = "/getdiscount";
  public router = express.Router();
  private products = [{
    id: "1",
    name: "Kaftan",
    userId: "123",
    code: "ww",
    amount: 200,
    discount: null,
    category: {
      name: "Cloth",
      discount: 25
    }
  }, {
    id: "2",
    name: "Kaftan",
    userId: "156",
    code: "gg",
    amount: 200,
    discount: 20,
    category: {
      name: "Cloth",
      discount: null
    }
  }];

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.post(this.path, this.getDiscount);
  }

  private getDiscount = async (
    request: express.Request,
    response: express.Response
  ) => {
    const PRODUCT_CODE = request.body.code;
    const product = this.products.find(product => product.code === PRODUCT_CODE);
    let discount;
    if (product.discount) {
      discount = `product discount is ${product.discount}`;
      response.json({
        discount: discount
      })
    } else if (product.category.discount) {
      discount = `Category discount is ${product.category.discount}`;
      response.json({
        discount: discount
      })
    } else {
      discount = -1;
      response.json({
        discount: discount
      })
    }
  };
}

export default ProductController;

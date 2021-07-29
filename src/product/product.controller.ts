import * as express from "express";
import Product from "./product.interface";
import productModel from "./product.model";
import CreatePostDto from "./product.dto";

class ProductController {
  public path = "/getdiscount";
  public router = express.Router();
  private products = [{
    id: "1",
    name: "T Shirt",
    code: "ww",
    discount: null,
    category: {
      name: "Cloth",
      discount: 25
    }
  }, {
    id: "2",
    name: "Kaftan",
    code: "gg",
    discount: 5,
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
    const AMOUNT = parseInt(request.body.amount);
    const USER_ID = request.body.userId;
    const product = this.products.find(product => product.code === PRODUCT_CODE);
    let discount;
    let percentage;

    if (USER_ID) {
      if (product.discount) {
        discount = `${product.discount}`;
        percentage = (discount / AMOUNT) * 100;
      } else if (product.category.discount) {
        discount = `${product.category.discount}`;
        percentage = (discount / AMOUNT) * 100;
      } else {
        discount = -1;
      }
      response.status(200).json({
        discount,
        percentage: parseInt(percentage)
      });
    } else {
      response.json({
        message: "Unauthorized"
      })
    }
  };
}

export default ProductController;

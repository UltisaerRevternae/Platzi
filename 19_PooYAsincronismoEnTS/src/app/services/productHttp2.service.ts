import { Product } from "../models/product.model";
import { BaseHttpService } from "./baseHttp.service";

class ProductHttp2Service extends BaseHttpService<Product> {
  otroRequest() {
    return 'LALALALLAL'
  }
}

export { ProductHttp2Service }

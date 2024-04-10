import { Product } from "../products/product.model";
import { User } from "../../01_enum";
import { BaseModel } from "../base.models";

interface Order extends BaseModel{
  products: Product[]
  user: User
}

export { Order }

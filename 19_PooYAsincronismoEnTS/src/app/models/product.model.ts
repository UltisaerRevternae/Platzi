import { Category } from "./category.model";

interface Product {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    Category;
  images:      string[];
  creationAt:  Date;
  updatedAt:   Date;
}

export { Product }

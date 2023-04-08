import { IDataResponseCreateBrandRequest } from "../brand/interface.brand";
import { IDataResponseCreateCategoryRequest } from "../category/interface.category";

export interface IProduct {
  createdAt: string;
  updatedAt: string;
  id: string;
  name: string;
  description: string;
  color: string;
  size: string;
  launchTime: string;
  priceAll: number;
  priceSeller: number;
  priceService: number;
  percentageService: number;
  isSale: boolean;
  salePrice: any;
  status: string;
  image_1: string | null;
  image_2: string | null;
  image_3: string | null;
  brand: IDataResponseCreateBrandRequest;
  category: IDataResponseCreateCategoryRequest;
  cart: any;
  order: any;
}
export interface IDataCreateProductRequest {
  data: IProductCreateRequest;
}
export interface IProductCreateRequest {
  name: string;
  description: string;
  color: string;
  launchTime: string;
  priceSeller: number;
  size: string;
  image_1: string;
  image_2: string;
  image_3: string;
  brand: string;
  category: string;
  percentageService?: number;
}

export interface IListOneProductRequest {
  productId: string;
}
export interface ResponseListOneProductRequest {
  message: string;
  product: IProduct;
}

export interface IProductListResponse {
  message: string;
  nextPage: any;
  currentPage: string;
  previousPage: any;
  amountPage: number;
  howManyFetched: number;
  result: IProduct[];
}

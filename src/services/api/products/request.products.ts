import { BaseURL, headerAuthorizationConfig } from "../config.global";
import {
  IDataCreateProductRequest,
  IListOneProductRequest,
  IProduct,
  ResponseListOneProductRequest,
} from "./interface.products";

export const ListProductsAdminRequest = async (page: number): Promise<any> => {
  try {
    const sucess = await BaseURL.get(
      `/products/admin?page=${page}`,
      headerAuthorizationConfig()
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const ListProductsRequest = async (
  page: number,
  promotion?: string
): Promise<any> => {
  try {
    const sucess = await BaseURL.get(
      `/products?${promotion ? `isSale=true` : `page=${page}`}`,
      headerAuthorizationConfig()
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const ListRecentsProductsRequest = async (): Promise<any> => {
  try {
    const sucess = await BaseURL.get(
      `/products/recents`,
      headerAuthorizationConfig()
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const listOneProductRequest = async ({
  productId,
}: IListOneProductRequest): Promise<ResponseListOneProductRequest> => {
  try {
    const sucess = await BaseURL.get(
      `/products/${productId}`,
      headerAuthorizationConfig()
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const deleteProductRequest = async (): Promise<any> => {
  try {
    const sucess = await BaseURL.delete(
      `/products/${localStorage.idProduct}`,
      headerAuthorizationConfig()
    );

    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const CreateProductRequest = async ({
  data,
}: IDataCreateProductRequest): Promise<IProduct> => {
  try {
    const sucess = await BaseURL.post(
      `/products`,
      data,
      headerAuthorizationConfig(true)
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const UpdateImageProductRequest = async (
  data: any,
  image_x: string,
  productId: string
) => {
  try {
    const sucess = await BaseURL.patch(
      `/products/${productId}/images?image=${image_x}`,
      data,
      headerAuthorizationConfig(true)
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const UpdateProductRequest = async (data: any) => {
  try {
    const sucess = await BaseURL.patch(
      `/products/${localStorage.idProduct}`,
      data,
      headerAuthorizationConfig()
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const SearchProductRequest = async (
  data: string,
  page: number
): Promise<any> => {
  try {
    const sucess = await BaseURL.get(
      `/products?partial=true&page=${page}&category.name=${data.search}&brand.name=${data.search}&name=${data.search}`,
      headerAuthorizationConfig()
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

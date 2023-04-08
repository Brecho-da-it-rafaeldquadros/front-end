import { IResponseListBrandsRequest } from "../brand/interface.brand";
import { BaseURL, headerAuthorizationConfig } from "../config.global";
import {
  ICreateCategoryRequest,
  IDeleteCategoryRequest,
  IResponseCreateCategoryRequest,
  IResponseDeleteCategoryRequest,
  IResponseListCategoryRequest,
  IResponseUpdateCategoryRequest,
  IUpdateCategoryRequest,
} from "./interface.category";

export const createCategoryRequest = async ({
  data,
}: ICreateCategoryRequest): Promise<IResponseCreateCategoryRequest> => {
  try {
    console.log(data);
    const sucess = await BaseURL.post(
      `/categories`,
      data,
      headerAuthorizationConfig()
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const listCategoryRequest =
  async (): Promise<IResponseListCategoryRequest> => {
    try {
      const sucess = await BaseURL.get(`/categories`);
      return sucess.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

export const updateCategoryRequest = async ({
  data,
}: IUpdateCategoryRequest): Promise<IResponseUpdateCategoryRequest> => {
  try {
    const sucess = await BaseURL.patch(
      `/categories/${localStorage.idCategory}`,
      data,
      headerAuthorizationConfig()
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const deleteCategoryRequest = async ({
  categoryId,
}: any): Promise<IResponseDeleteCategoryRequest> => {
  try {
    const sucess = await BaseURL.delete(
      `/categories/${localStorage.idCategory}`,
      headerAuthorizationConfig()
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const ListCategoryProductsRequest = async (
  categoryId: string
): Promise<IResponseListBrandsRequest> => {
  try {
    const sucess = await BaseURL.get(`/categories/${categoryId}/products`);
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

import { BaseURL, headerAuthorizationConfig } from "../config.global";
import {
  ICreateBrandRequest,
  IDeleteBrandRequest,
  IResponseCreateBrandRequest,
  IResponseDeleteBrandRequest,
  IResponseListBrandsRequest,
  IResponseUpdateBrandRequest,
  IUpdateBrandRequest,
} from "./interface.brand";

export const createBrandRequest = async ({
  data,
}: ICreateBrandRequest): Promise<IResponseCreateBrandRequest> => {
  try {
    const sucess = await BaseURL.post(
      `/brands`,
      data,
      headerAuthorizationConfig(true)
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const listBrandsRequest =
  async (): Promise<IResponseListBrandsRequest> => {
    try {
      const sucess = await BaseURL.get(`/brands`);
      return sucess.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

export const updateBrandRequest = async ({
  data,
}: IUpdateBrandRequest): Promise<IResponseUpdateBrandRequest> => {
  try {
    const sucess = await BaseURL.patch(
      `/brands/${localStorage.idBrand}`,
      data,
      headerAuthorizationConfig()
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const updateImageBrandRequest = async ({
  data,
}: any): Promise<IResponseUpdateBrandRequest> => {
  try {
    const sucess = await BaseURL.patch(
      `/brands/${localStorage.idBrand}/images`,
      data,
      headerAuthorizationConfig(true)
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const deleteBrandRequest = async ({
  brandId,
}: any): Promise<IResponseDeleteBrandRequest> => {
  try {
    const sucess = await BaseURL.delete(
      `/brands/${brandId}`,
      headerAuthorizationConfig()
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const ListBrandsProductsRequest = async (
  brandId: string
): Promise<IResponseListBrandsRequest> => {
  try {
    const sucess = await BaseURL.get(`/brands/${brandId}/products`);
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

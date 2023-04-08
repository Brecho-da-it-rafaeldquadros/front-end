import { BaseURL, headerAuthorizationConfig } from "../config.global";
import { IAddProductInBagRequest, IRemoveOneProductInBagRequest, IResponseAddProductInBagRequest, IResponseListMyBagRequest, IResponseRemoveAllProductInBagRequest, IResponseRemoveOneProductInBagRequest } from "./interface.bag";

export const addProductInBagRequest = async ( { productId }:IAddProductInBagRequest ):Promise<IResponseAddProductInBagRequest> => {
    try {
        const sucess = await BaseURL.post(`/bag/product/${productId}`, {}, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};

export const listMyBagRequest = async ():Promise<IResponseListMyBagRequest> => {
    try {
        const sucess = await BaseURL.get(`/bag`, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};

export const removeOneProductInBagRequest = async ( { productId }:IRemoveOneProductInBagRequest ):Promise<IResponseRemoveOneProductInBagRequest> => {
    try {
        const sucess = await BaseURL.delete(`/bag/product/${productId}`, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};

export const removeAllProductInBagRequest = async ():Promise<IResponseRemoveAllProductInBagRequest> => {
    try {
        const sucess = await BaseURL.delete(`/bag`, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};

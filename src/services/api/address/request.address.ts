import { BaseURL, headerAuthorizationConfig, transforObjectInQueryParms } from "../config.global";
import { ICreateAddressRequest, IDeleteAddressRequest, IListAllAddressRequest, IListOneAddressRequest, IResponseCreateAddressRequest, IResponseDeleteAddressRequest, IResponseListAllAddressRequest, IResponseListDeliveryInAddressRequest, IResponseListOneAddressRequest, IResponseUpdateAddressRequest, IUpdateAddressRequest } from "./interface.address";

export const createMyAddressRequest = async ( { data }:ICreateAddressRequest ):Promise<IResponseCreateAddressRequest> => {
    try {
        const sucess = await BaseURL.post(`/address`, data, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};

export const listDeliveryInAddressRequest = async ():Promise<IResponseListDeliveryInAddressRequest> => {
    try {
        const sucess = await BaseURL.get(`/address/delivery`, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};

export const listOneAddressRequest = async ( { addressId, userId }:IListOneAddressRequest ):Promise<IResponseListOneAddressRequest> => {
    try {
        const sucess = await BaseURL.get(`/address/${ addressId ? `${addressId}/` : ""}user/${ userId ? `${userId}/` : ""}type`, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};


export const listManyAddressRequest = async ( { userId, query, page, perPage }:IListAllAddressRequest ):Promise<IResponseListAllAddressRequest> => {

    const queryParms = transforObjectInQueryParms(query ? query : {})

    page = page ? page : "page=1"

    try {
        const sucess = await BaseURL.get(`/address/user/${userId ? `${userId}/` : ""}type/all?${page}${perPage ? `&perPage=${perPage}` : ""}${ queryParms.length > 0 ? `&${queryParms}` : "" }`, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};


export const updateMyAddressRequest = async ( { addressId, data }:IUpdateAddressRequest ):Promise<IResponseUpdateAddressRequest> => {
    try {
        const sucess = await BaseURL.patch(`/address/${addressId}`, data, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};


export const deleteMyAddressRequest = async ( { addressId }:IDeleteAddressRequest ):Promise<IResponseDeleteAddressRequest> => {
    try {
        const sucess = await BaseURL.delete(`/address/${addressId}`, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};


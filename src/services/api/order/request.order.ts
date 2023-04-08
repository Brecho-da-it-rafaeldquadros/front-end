import { BaseURL, headerAuthorizationConfig, transforObjectInQueryParms } from "../config.global";
import { ICreateOrderRequest, IListManyOrderRequest, IListOneOrderRequest, IResponseCreateOrderRequest, IResponseListManyOrderRequest, IResponseListOneOrderRequest, IResponseUpdateOrderRequest, IUpdateOrderRequest } from "./interface.order";

export const createOrderRequest = async ( { data }:ICreateOrderRequest ):Promise<IResponseCreateOrderRequest> => {
    try {
        const sucess = await BaseURL.post(`/orders`, data, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};

export const listOneOrderRequest = async ( { orderId }:IListOneOrderRequest ):Promise<IResponseListOneOrderRequest> => {
    try {
        const sucess = await BaseURL.get(`/orders/${orderId}`, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};

export const listManyOrderRequest = async ( { userId, page, query }:IListManyOrderRequest ):Promise<IResponseListManyOrderRequest> => {

    const queryParms = transforObjectInQueryParms(query ? query : {})

    page = page ? page : "page=1"

    try {
        const sucess = await BaseURL.get(`/orders${ userId ? `/user/${userId}` : ""}?${page}${ queryParms.length > 0 ? `&${queryParms}` : "" }`, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};

export const updateOrderRequest = async ( { data, orderId }:IUpdateOrderRequest ):Promise<IResponseUpdateOrderRequest> => {
    try {
        const sucess = await BaseURL.patch(`/orders/${orderId}`, data, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};

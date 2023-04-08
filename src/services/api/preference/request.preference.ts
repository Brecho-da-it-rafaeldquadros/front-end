import { BaseURL, headerAuthorizationConfig } from "../config.global";
import { ICreateMyPreferenceRequest, IListOnePreferenceRequest, IResponseCreateMyPreferenceRequest, IResponseDeleteMyPreferenceRequest, IResponseListOnePreferenceRequest, IResponseUpdateMyPreferenceRequest, IUpdateMyPreferenceRequest } from "./interface.preference";

export const createMyPreferenceRequest = async ( { data }:ICreateMyPreferenceRequest ):Promise<IResponseCreateMyPreferenceRequest> => {
    
    try {
        const sucess = await BaseURL.post(`/preference`, data, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};

export const listOnePreferenceRequest = async ( { userId }:IListOnePreferenceRequest ):Promise<IResponseListOnePreferenceRequest> => {
    try {
        const sucess = await BaseURL.get(`/preference${ userId ? `/user/${userId}` : "" }`, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};

export const updateMyPreferenceRequest = async ( { data }:IUpdateMyPreferenceRequest ):Promise<IResponseUpdateMyPreferenceRequest> => {
    try {
        const sucess = await BaseURL.patch(`/preference`, data, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};

export const deleteMyPreferenceRequest = async ():Promise<IResponseDeleteMyPreferenceRequest> => {
    try {
        const sucess = await BaseURL.delete(`/preference`, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};
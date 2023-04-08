import { BaseURL, headerAuthorizationConfig } from "../config.global";
import { ICreateDataBankRequest, IListOneDataBankRequest, IResponseCreateDataBankRequest, IResponseDeleteDataBankRequest, IResponseListOneDataBankRequest, IResponseUpdateDataBankRequest, IUpdateDataBankRequest } from "./interface.bank";

export const createMyDataBrankRequest = async ( { data }:ICreateDataBankRequest ):Promise<IResponseCreateDataBankRequest> => {
    try {
        const sucess = await BaseURL.post(`/bankData`, data, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};

export const listOneDataBrankRequest = async ( { userId, auth }:IListOneDataBankRequest ):Promise<IResponseListOneDataBankRequest> => {
    try {
        const sucess = await BaseURL.post(`/bankData/user${ userId ? `/${userId}` : "" }`, auth, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};

export const updateMyDataBrankRequest = async ( { data }:IUpdateDataBankRequest ):Promise<IResponseUpdateDataBankRequest> => {
    try {
        const sucess = await BaseURL.patch(`/bankData`, data, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};

export const deleteMyDataBrankRequest = async ():Promise<IResponseDeleteDataBankRequest> => {
    try {
        const sucess = await BaseURL.delete(`/bankData`, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};
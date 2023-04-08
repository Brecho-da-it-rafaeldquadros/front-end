import { IAuth } from "../interface.global"

export interface IDataCreateDataBankRequest {
    cpf?: string
    accountNumber?: string
    agency?: string
    pix?: string
}
export interface ICreateDataBankRequest {
    data:IDataCreateDataBankRequest
}
export interface IDataResponseCreateDataBankRequest {
    id:string
    cpf: string
    accountNumber: string
    agency: string
    pix: string
}
export interface IResponseCreateDataBankRequest {
    message:string
    bank:IDataResponseCreateDataBankRequest
}



export interface IListOneDataBankRequest {
    userId?:string
    auth:IAuth
}
export interface IDataResponseListOneDataBankRequest {
    id:string
    cpf?: string
    accountNumber?: string
    agency?: string
    pix?: string
}
export interface IResponseListOneDataBankRequest {
    message:string
    bank:IDataResponseListOneDataBankRequest
}



export interface IUpdateDataBankRequest {
    data:IDataCreateDataBankRequest
}
export interface IResponseUpdateDataBankRequest {
    message:string
    bank:IDataResponseListOneDataBankRequest
}



export interface IResponseDeleteDataBankRequest {
    message:string
}

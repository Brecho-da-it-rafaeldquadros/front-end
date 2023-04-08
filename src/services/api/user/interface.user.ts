import { IAuth } from "../interface.global"

type ISendMessage = "sms" | "email"
type IRouteSendMessage = "create" | "update" | "retrieveAccount"

export interface IDataCreateUserRequest {
    fullName:string
    email:string
    password:string
    isTermsAccepted: boolean
    phone:string
    authorizationLevel?:number
}
export interface ICreateUserRequest {
    data:IDataCreateUserRequest
}
export interface IDataResponseCreateUserRequest {
    updatedAt?: string
    createdAt?: string
    authorizationLevel?: number
    phone?: string
    email?: string
    fullName?: string
    id: string
    isConfirmedEmail:boolean
    isConfirmedPhone:boolean
}
export interface IResponseCreateUserRequest {
    message: string
    user:IDataResponseCreateUserRequest
}



export interface ISolicitationCodeUserRequest {
    userId:string
    solicitation: ISendMessage
    route: IRouteSendMessage
}
export interface IResponseSolicitationCodeUserRequest {
    message:string
}



export interface IDataConfirmCodeUserRequest {
    code:string
}
export interface IConfirmCodeUserRequest {
    userId:string
    confirm: ISendMessage
    route: IRouteSendMessage
    data:IDataConfirmCodeUserRequest
}
export interface IDataResponseConfirmCodeUserRequest {
    updatedAt: string
    createdAt: string
    authorizationLevel: number
    phone: string
    email: string
    fullName: string
    id: string
    isActive:boolean
    isConfirmedPhone: boolean,
    isConfirmedEmail: boolean
}
export interface IResponseConfirmCodeUserRequest {
    message: string
    user:IDataResponseConfirmCodeUserRequest
}



export interface IDataRetrieiveAccountUserRequest {
    email:string
    newPassword:string
}
export interface IRetrieiveAccountUserRequest {
    data:IDataRetrieiveAccountUserRequest
}
export interface IResponseRetrieiveAccountUserRequest {
    message:string
    user:{
        id:string
    }
}


export interface IDataSendEmailUserForm {
    email:string
}
export interface IDataRetrieiveAccountUserForm {
    email:string
    newPassword:string
    confirmPassowrd:string
}


export interface IDataInitSessionUserRequest {
    email: string
	password: string
}
export interface IInitSessionUserRequest {
    data:IDataInitSessionUserRequest
}
export interface IResponseInitSessionUserRequest {
    message:string
    token:string
    user:IDataResponseConfirmCodeUserRequest
}



export interface IListOneUserRequest {
    userId?:string
}
export interface IResponseListOneUserRequest {
    message:string
    user:IDataResponseConfirmCodeUserRequest
}



export interface IListManyUserRequest {
    query?: object
    page?: string
    perPage?: number
}
export interface IResponseListManyUserRequest {
    message:string
    users:IDataResponseConfirmCodeUserRequest[]
}



export interface IDataUpdateUserRequest {
    fullName?:string
    email?:string
    password?:string
    phone?:string
    authorizationLevel?: number
    isActive?: boolean
}
export interface IUpdateUserRequest {
    userId?:string
    data:IDataUpdateUserRequest
    auth:IAuth
}
export interface IResponseUpdateUserRequest {
    message: string
    user:IDataResponseConfirmCodeUserRequest
}



export interface IDeactivateUserRequest {
    userId?:string  
    auth:IAuth
}
export interface IResponseDeactivateUserRequest {
    message:string
}


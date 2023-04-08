import { IPagination } from "../interface.global"

export interface IDataCreateOrderRequest {
    code:string,
    price:number,
    delivery_time:number
}
export interface ICreateOrderRequest {
    data:IDataCreateOrderRequest
}
export interface IDataResponseCreateOrderRequest {
    id: string
	preferenceId: string
	paymentId: null | string,
	status: string
	priceAll: number
	priceProducts: number
	priceTransport: number
	trackingCode: string
	paymentURL: string
	deliveryMethodCode: string
	deliveryStowageAt: string
	companyTrackingAreaLink: string
	methodType: null | string
	method: string
	address: string
	simpleProducts: string[],
	validAt: string,
	updatedAt: string,
	createdAt: string
	companyAddress:string
}
export interface IResponseCreateOrderRequest {
    message: string
	order: IDataResponseCreateOrderRequest
}




export interface IListOneOrderRequest {
    orderId:string
}
export interface IDataProductResponseListOneOrderRequest{
    createdAt: string
	updatedAt: string
	id: string
	name: string
	description: string
	color: string
	size: string
	launchTime: string
	priceAll:number
	priceSeller: number
	priceService: number
	percentageService: number
	isSale: boolean
	salePrice: null | number
	status: string
	image_1: null | string
	image_2: null | string
	image_3: null | string
}
export interface IDataResponseListOneOrderRequest extends IDataResponseCreateOrderRequest{
    products:IDataProductResponseListOneOrderRequest[]
}
export interface IResponseListOneOrderRequest {
    message:string
    order:IDataResponseListOneOrderRequest
}



export interface IListManyOrderRequest {
    userId?:string
	page?:string
	query?:object
}
export interface IDataResponseListManyOrderRequest {
    id: string
    status: string
	updatedAt: string
	createdAt: string
}
export interface IResponseListManyOrderRequest extends IPagination{
    message: string
    result:IDataResponseCreateOrderRequest[]
}





export interface IDataUpdateOrderRequest {
    trackingCode?:string,
	companyTrackingAreaLink?:string
}
export interface IUpdateOrderRequest {
    data:IDataUpdateOrderRequest
	orderId:string
}
export interface IResponseUpdateOrderRequest {
    message: string
	order: IDataResponseCreateOrderRequest
}




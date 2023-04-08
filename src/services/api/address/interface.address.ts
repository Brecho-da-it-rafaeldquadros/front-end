export interface IDataCreateAddressRequest {
    name:string
    cep:string
    number: string
    complement?: string
    isCompanyAddress?: boolean
    isDefault?: boolean
}
export interface ICreateAddressRequest {
    data:IDataCreateAddressRequest
}
export interface IDataResponseCreateAddressRequest {
    isSameTown: boolean,
	isDefault: boolean,
	isCompanyAddress: boolean,
	cep: string,
	street: string,
	number: string,
	city: string,
	uf: string,
    name:string
	neighborhood: string,
	complement: string,
	id: string
}
export interface IResponseCreateAddressRequest {
    message: string
    address: IDataResponseCreateAddressRequest
}




export interface IListOneAddressRequest {
    addressId:string
    userId?:string
}
export interface IResponseListOneAddressRequest {
    message: string
    address: IDataResponseCreateAddressRequest
}



export interface IDataResponseListDeliveryInAddressRequest {
    Codigo: number,
    Valor: string,
	PrazoEntrega: string,
    EntregaDomiciliar: string,
	EntregaSabado: string,
    type:string
    description:string
}
export interface IResponseListDeliveryInAddressRequest {
    message: string
    delivery: IDataResponseListDeliveryInAddressRequest[]
}


export interface IListAllAddressRequest {
    userId?:string
    query?:object
    page?:string
    perPage?:number
}

export interface IResponseListAllAddressRequest {
    message: string
    address: IDataResponseCreateAddressRequest[]
}




export interface IDataUpdateAddressRequest {
    name?:string
    cep?:string
    number?: string
    complement?: string
    isCompanyAddress?: boolean
    isDefault?: boolean
}
export interface IUpdateAddressRequest {
    addressId:string
    data:IDataUpdateAddressRequest
}   
export interface IResponseUpdateAddressRequest {
    message: string
    address: IDataResponseCreateAddressRequest
}



export interface IDeleteAddressRequest {
    addressId:string
}
export interface IResponseDeleteAddressRequest {
    message:string
}

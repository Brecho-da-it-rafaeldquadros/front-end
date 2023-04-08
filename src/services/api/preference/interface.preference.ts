export interface IDataCreateMyPreferenceRequest {
    shoeSize: string
    clothingSize: string
    handBagSize: string
    category:  string 
    brand:  string 
    color: string
}
export interface ICreateMyPreferenceRequest {
    data:IDataCreateMyPreferenceRequest
}
export interface IDataResponseCreateMyPreferenceCategoryRequest {
	id: string,
	name: string
}
export interface IDataResponseCreateMyPreferenceBrandRequest extends IDataResponseCreateMyPreferenceCategoryRequest{
	sizeTable: string
}
export interface IDataResponseCreateMyPreferenceRequest {
    isActive: boolean,
	shoeSize: number,
	clothingSize: string,
	handBagSize: string,
	color: string,
	category: IDataResponseCreateMyPreferenceCategoryRequest,
	brand: IDataResponseCreateMyPreferenceBrandRequest,
	id: string
}

export interface IResponseCreateMyPreferenceRequest {
    message:string
    preference:IDataResponseCreateMyPreferenceRequest
}



export interface IListOnePreferenceRequest {
    userId?:string
}
export interface IResponseListOnePreferenceRequest {
    message:string
    preference:IDataResponseCreateMyPreferenceRequest
}



export interface IDataUpdateMyPreferenceRequest {
    isActive?: boolean,
	shoeSize?: number,
	clothingSize?: string,
	handBagSize?: string,
	color?: string,
	category?: string
	brand?: string
	id?: string
}
export interface IUpdateMyPreferenceRequest {
    data:IDataUpdateMyPreferenceRequest
}
export interface IResponseUpdateMyPreferenceRequest {
    message:string
    preference:IDataResponseCreateMyPreferenceRequest
}



export interface IResponseDeleteMyPreferenceRequest {
    message:string
}


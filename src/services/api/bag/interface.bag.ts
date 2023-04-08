export interface IAddProductInBagRequest {
    productId:string
}
export interface IResponseAddProductInBagRequest {
    message:string
}




export interface IDataProductResponseResponseListMyBagRequest {
    id: string
	name: string
	priceAll: number
	isSale: boolean
	salePrice: null | number
	image_1: string
	category: {
		name: string
	},
	brand: {
		name: string
	}
}

export interface IResponseListMyBagRequest {
    message: string
	resume: {
		price: {
			penny: string,
			value: string,
			valueFomart: string
		}
		amount: number
	},
	bag: {
		id: string
		validAt: string
		updatedAt: string,
		createdAt: string,
		products: IDataProductResponseResponseListMyBagRequest[]
	}
}




export interface IRemoveOneProductInBagRequest {
    productId:string
}
export interface IResponseRemoveOneProductInBagRequest {
    message:string
}




export interface IResponseRemoveAllProductInBagRequest {
    message:string
}



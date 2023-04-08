export interface IDataCreateBrandRequest {
  name: string;
  sizeTable: any;
}
export interface ICreateBrandRequest {
  data: IDataCreateBrandRequest;
}
export interface IDataResponseCreateBrandRequest {
  name: string;
  sizeTable: string;
  id: string;
}
export interface IResponseCreateBrandRequest {
  message: string;
  brand: IDataResponseCreateBrandRequest;
}

export interface IResponseListBrandsRequest {
  message: string;
  brands: IDataResponseCreateBrandRequest[];
}

export interface IDataUpdateBrandRequest {
  name?: string;
  sizeTable?: any;
}
export interface IUpdateBrandRequest {
  brandId: string;
  data: IDataUpdateBrandRequest;
}
export interface IResponseUpdateBrandRequest {
  message: string;
  brand: IDataResponseCreateBrandRequest;
}

export interface IDeleteBrandRequest {
  brandId: string;
}
export interface IResponseDeleteBrandRequest {
  message: string;
}

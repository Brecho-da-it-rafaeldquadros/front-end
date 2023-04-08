export interface IDataCreateCategoryRequest {
  name: string;
}
export interface ICreateCategoryRequest {
  data: IDataCreateCategoryRequest;
}
export interface IDataResponseCreateCategoryRequest {
  name: string;
  id: string;
}
export interface IResponseCreateCategoryRequest {
  message: string;
  category: IDataResponseCreateCategoryRequest;
}

export interface IResponseListCategoryRequest {
  message: string;
  categories: IDataResponseCreateCategoryRequest[];
}

export interface IUpdateCategoryRequest {
  data: IDataCreateCategoryRequest;
}
export interface IResponseUpdateCategoryRequest {
  message: string;
  category: IDataResponseCreateCategoryRequest;
}

export interface IDeleteCategoryRequest {
  categoryId: any;
}

export interface IResponseDeleteCategoryRequest {
  message: string;
}

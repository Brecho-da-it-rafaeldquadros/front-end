import { createContext, ReactNode, useContext } from "react";
import {
  ICreateAddressRequest,
  IDeleteAddressRequest,
  IListAllAddressRequest,
  IListOneAddressRequest,
  IResponseCreateAddressRequest,
  IResponseDeleteAddressRequest,
  IResponseListAllAddressRequest,
  IResponseListDeliveryInAddressRequest,
  IResponseListOneAddressRequest,
  IResponseUpdateAddressRequest,
  IUpdateAddressRequest,
} from "../services/api/address/interface.address";
import {
  createMyAddressRequest,
  deleteMyAddressRequest,
  listDeliveryInAddressRequest,
  listManyAddressRequest,
  listOneAddressRequest,
  updateMyAddressRequest,
} from "../services/api/address/request.address";
import { IAddProductInBagRequest, IRemoveOneProductInBagRequest, IResponseAddProductInBagRequest, IResponseListMyBagRequest, IResponseRemoveAllProductInBagRequest, IResponseRemoveOneProductInBagRequest } from "../services/api/bag/interface.bag";
import { addProductInBagRequest, listMyBagRequest, removeAllProductInBagRequest, removeOneProductInBagRequest } from "../services/api/bag/request.bag";
import {
  ICreateDataBankRequest,
  IListOneDataBankRequest,
  IResponseCreateDataBankRequest,
  IResponseDeleteDataBankRequest,
  IResponseListOneDataBankRequest,
  IResponseUpdateDataBankRequest,
  IUpdateDataBankRequest,
} from "../services/api/bank/interface.bank";
import {
  createMyDataBrankRequest,
  deleteMyDataBrankRequest,
  listOneDataBrankRequest,
  updateMyDataBrankRequest,
} from "../services/api/bank/request.bank";
import {
  ICreateBrandRequest,
  IDeleteBrandRequest,
  IResponseCreateBrandRequest,
  IResponseDeleteBrandRequest,
  IResponseListBrandsRequest,
  IResponseUpdateBrandRequest,
  IUpdateBrandRequest,
} from "../services/api/brand/interface.brand";
import {
  createBrandRequest,
  deleteBrandRequest,
  listBrandsRequest,
  updateBrandRequest,
} from "../services/api/brand/request.brand";
import {
  ICreateCategoryRequest,
  IDeleteCategoryRequest,
  IResponseCreateCategoryRequest,
  IResponseDeleteCategoryRequest,
  IResponseListCategoryRequest,
  IResponseUpdateCategoryRequest,
  IUpdateCategoryRequest,
} from "../services/api/category/interface.category";
import {
  createCategoryRequest,
  deleteCategoryRequest,
  listCategoryRequest,
  updateCategoryRequest,
} from "../services/api/category/request.category";
import { ICreateOrderRequest, IListManyOrderRequest, IListOneOrderRequest, IResponseCreateOrderRequest, IResponseListManyOrderRequest, IResponseListOneOrderRequest, IResponseUpdateOrderRequest, IUpdateOrderRequest } from "../services/api/order/interface.order";
import { createOrderRequest, listManyOrderRequest, listOneOrderRequest, updateOrderRequest } from "../services/api/order/request.order";
import {
  ICreateMyPreferenceRequest,
  IListOnePreferenceRequest,
  IResponseCreateMyPreferenceRequest,
  IResponseDeleteMyPreferenceRequest,
  IResponseListOnePreferenceRequest,
  IResponseUpdateMyPreferenceRequest,
  IUpdateMyPreferenceRequest,
} from "../services/api/preference/interface.preference";
import {
  createMyPreferenceRequest,
  deleteMyPreferenceRequest,
  listOnePreferenceRequest,
  updateMyPreferenceRequest,
} from "../services/api/preference/request.preference";
import { IListOneProductRequest, ResponseListOneProductRequest } from "../services/api/products/interface.products";
import { listOneProductRequest } from "../services/api/products/request.products";
import {
  IConfirmCodeUserRequest,
  ICreateUserRequest,
  IDeactivateUserRequest,
  IInitSessionUserRequest,
  IListManyUserRequest,
  IListOneUserRequest,
  IResponseConfirmCodeUserRequest,
  IResponseCreateUserRequest,
  IResponseDeactivateUserRequest,
  IResponseInitSessionUserRequest,
  IResponseListManyUserRequest,
  IResponseListOneUserRequest,
  IResponseRetrieiveAccountUserRequest,
  IResponseSolicitationCodeUserRequest,
  IResponseUpdateUserRequest,
  IRetrieiveAccountUserRequest,
  ISolicitationCodeUserRequest,
  IUpdateUserRequest,
} from "../services/api/user/interface.user";
import {
  confirmCodeUserRequest,
  createUserRequest,
  deactivateUserRequest,
  initSessionUserRequest,
  listManyUsersRequest,
  listOneUserRequest,
  retrieiveAccountUserRequest,
  solicitationCodeUserRequest,
  updateUserRequest,
} from "../services/api/user/request.user";

interface IRequestContext {
  createUserRequest: (
    data: ICreateUserRequest
  ) => Promise<IResponseCreateUserRequest>;
  solicitationCodeUserRequest: (
    data: ISolicitationCodeUserRequest
  ) => Promise<IResponseSolicitationCodeUserRequest>;
  confirmCodeUserRequest: (
    data: IConfirmCodeUserRequest
  ) => Promise<IResponseConfirmCodeUserRequest>;
  retrieiveAccountUserRequest: (
    data: IRetrieiveAccountUserRequest
  ) => Promise<IResponseRetrieiveAccountUserRequest>;
  initSessionUserRequest: (
    data: IInitSessionUserRequest
  ) => Promise<IResponseInitSessionUserRequest>;
  listOneUserRequest: (
    data: IListOneUserRequest
  ) => Promise<IResponseListOneUserRequest>;
  listManyUsersRequest: (
    data: IListManyUserRequest
  ) => Promise<IResponseListManyUserRequest>;
  updateUserRequest: (
    data: IUpdateUserRequest
  ) => Promise<IResponseUpdateUserRequest>;
  deactivateUserRequest: (
    data: IDeactivateUserRequest
  ) => Promise<IResponseDeactivateUserRequest>;
  createMyAddressRequest: (
    data: ICreateAddressRequest
  ) => Promise<IResponseCreateAddressRequest>;
  listOneAddressRequest: (
    data: IListOneAddressRequest
  ) => Promise<IResponseListOneAddressRequest>;
  listManyAddressRequest: (
    data: IListAllAddressRequest
  ) => Promise<IResponseListAllAddressRequest>;
  updateMyAddressRequest: (
    data: IUpdateAddressRequest
  ) => Promise<IResponseUpdateAddressRequest>;
  deleteMyAddressRequest: (
    data: IDeleteAddressRequest
  ) => Promise<IResponseDeleteAddressRequest>;
  createMyDataBrankRequest: (
    data: ICreateDataBankRequest
  ) => Promise<IResponseCreateDataBankRequest>;
  listOneDataBrankRequest: (
    data: IListOneDataBankRequest
  ) => Promise<IResponseListOneDataBankRequest>;
  updateMyDataBrankRequest: (
    data: IUpdateDataBankRequest
  ) => Promise<IResponseUpdateDataBankRequest>;
  deleteMyDataBrankRequest: () => Promise<IResponseDeleteDataBankRequest>;
  createMyPreferenceRequest: (
    data: ICreateMyPreferenceRequest
  ) => Promise<IResponseCreateMyPreferenceRequest>;
  listOnePreferenceRequest: (
    data: IListOnePreferenceRequest
  ) => Promise<IResponseListOnePreferenceRequest>;
  updateMyPreferenceRequest: (
    data: IUpdateMyPreferenceRequest
  ) => Promise<IResponseUpdateMyPreferenceRequest>;
  deleteMyPreferenceRequest: () => Promise<IResponseDeleteMyPreferenceRequest>;
  createBrandRequest: (
    data: ICreateBrandRequest
  ) => Promise<IResponseCreateBrandRequest>;
  listBrandsRequest: () => Promise<IResponseListBrandsRequest>;
  updateBrandRequest: (
    data: IUpdateBrandRequest
  ) => Promise<IResponseUpdateBrandRequest>;
  deleteBrandRequest: (
    data: IDeleteBrandRequest
  ) => Promise<IResponseDeleteBrandRequest>;
  createCategoryRequest: (
    data: ICreateCategoryRequest
  ) => Promise<IResponseCreateCategoryRequest>;
  listCategoryRequest: () => any;
  updateCategoryRequest: (
    data: IUpdateCategoryRequest
  ) => Promise<IResponseUpdateCategoryRequest>;
  deleteCategoryRequest: (
    data: IDeleteCategoryRequest
  ) => Promise<IResponseDeleteCategoryRequest>;
  addProductInBagRequest:( data:IAddProductInBagRequest ) => Promise<IResponseAddProductInBagRequest>
  listMyBagRequest:() => Promise<IResponseListMyBagRequest>
  removeOneProductInBagRequest:( data:IRemoveOneProductInBagRequest ) => Promise<IResponseRemoveOneProductInBagRequest> 
  removeAllProductInBagRequest:() => Promise<IResponseRemoveAllProductInBagRequest>
  listDeliveryInAddressRequest:() => Promise<IResponseListDeliveryInAddressRequest>
  createOrderRequest:( data:ICreateOrderRequest ) => Promise<IResponseCreateOrderRequest>
  listOneOrderRequest:( data:IListOneOrderRequest ) => Promise<IResponseListOneOrderRequest>
  listManyOrderRequest:( data:IListManyOrderRequest ) => Promise<IResponseListManyOrderRequest> 
  updateOrderRequest:( data:IUpdateOrderRequest ) => Promise<IResponseUpdateOrderRequest>
  listOneProductRequest:(data:IListOneProductRequest) => Promise<ResponseListOneProductRequest>
}

interface IRequestProps {
  children: ReactNode;
}

export const RequestContext = createContext<IRequestContext>(
  {} as IRequestContext
);

export const RequestProvider = ({ children }: IRequestProps) => {

  

  return (
    <RequestContext.Provider
      value={{
        listOneProductRequest,
        listDeliveryInAddressRequest,
        addProductInBagRequest,
        listMyBagRequest,
        removeOneProductInBagRequest,
        removeAllProductInBagRequest,
        createUserRequest,
        solicitationCodeUserRequest,
        confirmCodeUserRequest,
        retrieiveAccountUserRequest,
        initSessionUserRequest,
        listOneUserRequest,
        listManyUsersRequest,
        updateUserRequest,
        deactivateUserRequest,
        createMyAddressRequest,
        listOneAddressRequest,
        listManyAddressRequest,
        updateMyAddressRequest,
        deleteMyAddressRequest,
        createMyDataBrankRequest,
        listOneDataBrankRequest,
        updateMyDataBrankRequest,
        deleteMyDataBrankRequest,
        createMyPreferenceRequest,
        listOnePreferenceRequest,
        updateMyPreferenceRequest,
        deleteMyPreferenceRequest,
        createBrandRequest,
        listBrandsRequest,
        updateBrandRequest,
        deleteBrandRequest,
        createCategoryRequest,
        listCategoryRequest,
        updateCategoryRequest,
        deleteCategoryRequest,
        createOrderRequest,
        listOneOrderRequest,
        listManyOrderRequest,
        updateOrderRequest
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export const useRequest = () => useContext(RequestContext);

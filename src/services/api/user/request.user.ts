import {
  BaseURL,
  headerAuthorizationConfig,
  transforObjectInQueryParms,
} from "../config.global";
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
} from "./interface.user";

export const createUserRequest = async ({
  data,
}: ICreateUserRequest): Promise<IResponseCreateUserRequest> => {
  try {
    const sucess = await BaseURL.post(
      `/users`,
      data,
      headerAuthorizationConfig()
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const solicitationCodeUserRequest = async ({
  userId,
  route,
  solicitation,
}: ISolicitationCodeUserRequest): Promise<IResponseSolicitationCodeUserRequest> => {
  try {
    const sucess = await BaseURL.get(
      `/users/${userId}/solicitation/code=${solicitation}/${route}`,
      headerAuthorizationConfig()
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const confirmCodeUserRequest = async ({
  userId,
  route,
  confirm,
  data,
}: IConfirmCodeUserRequest): Promise<IResponseConfirmCodeUserRequest> => {
  try {
    const sucess = await BaseURL.post(
      `/users/${userId}/confirm/code=${confirm}/${route}`,
      data,
      headerAuthorizationConfig()
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const retrieiveAccountUserRequest = async ({
  data,
}: IRetrieiveAccountUserRequest): Promise<IResponseRetrieiveAccountUserRequest> => {
  try {
    const sucess = await BaseURL.post(`/users/retrieveAccount`, data);
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const initSessionUserRequest = async ({
  data,
}: IInitSessionUserRequest): Promise<IResponseInitSessionUserRequest> => {
  try {
    const sucess = await BaseURL.post(
      `/session`,
      data,
      headerAuthorizationConfig()
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const listOneUserRequest = async ({
  userId,
}: IListOneUserRequest): Promise<IResponseListOneUserRequest> => {
  try {
    const sucess = await BaseURL.get(
      `/users${userId ? `/${userId}` : ""}`,
      headerAuthorizationConfig()
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const listManyUsersRequest = async ({
  query,
  page,
  perPage,
}: IListManyUserRequest): Promise<IResponseListManyUserRequest> => {
  const queryParms = transforObjectInQueryParms(query ? query : {});

  page = page ? page : "page=1";

  try {
    const sucess = await BaseURL.get(
      `/users?${page}${perPage ? `&perPage=${perPage}` : ""}${
        queryParms.length > 0 ? `&${queryParms}` : ""
      }`,
      headerAuthorizationConfig()
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const updateUserRequest = async ({
  userId,
  data,
  auth,
}: IUpdateUserRequest): Promise<IResponseUpdateUserRequest> => {
  try {
    const sucess = await BaseURL.patch(
      `/users${userId ? `/${userId}` : ""}`,
      { auth: auth, ...data },
      headerAuthorizationConfig()
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const deactivateUserRequest = async ({
  userId,
  auth,
}: IDeactivateUserRequest): Promise<IResponseDeactivateUserRequest> => {
  try {
    const sucess = await BaseURL.post(
      `/users/deactivate/${userId ? `/${userId}` : ""}`,
      auth,
      headerAuthorizationConfig()
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const listUserRequest = async (page: number) => {
  try {
    const sucess = await BaseURL.get(
      `/users/all?page=${page}`,
      headerAuthorizationConfig()
    );
    return sucess.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

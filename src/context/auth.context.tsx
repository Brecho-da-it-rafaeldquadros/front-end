import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ISolicitationCodeUserRequest,
  IInitSessionUserRequest,
  IDataResponseConfirmCodeUserRequest,
  IDataInitSessionUserRequest,
} from "../services/api/user/interface.user";
import {
  createUserRequest,
  initSessionUserRequest,
} from "../services/api/user/request.user";
import { options } from "../services/toast";
import { useModal } from "./modal.context";
import { useRequest } from "./request.context";

interface IAuthContext {
  isAutentication: boolean;
  createUser: (data: any) => Promise<void>;
  solicitationCode: (
    solicitation: ISolicitationCodeUserRequest
  ) => Promise<string | void>;
  loginRequest: (data: any) => Promise<void>;
  getUserStorgeOrRedirectAndRequired: (
    data: IVerificationUser
  ) => Promise<IDataResponseConfirmCodeUserRequest>;
}

interface IVerificationUser {
  requerid?: boolean;
}

interface IAuthProps {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProps) => {
  const [isAutentication, setIsAutentication] = useState(false);
  const { setIsOpenModal, setId } = useModal();

  const navigate = useNavigate();
  const { solicitationCodeUserRequest, listOneUserRequest } = useRequest();

  const getUserStorgeOrRedirectAndRequired = async ({
    requerid,
  }: IVerificationUser) => {
    let user =
      localStorage?.BRECHO_DA_IT_USER &&
      JSON.parse(localStorage?.BRECHO_DA_IT_USER);
    const token = localStorage?.BRECHO_DA_IT_TOKEN;

    function removeCredentials() {
      setIsAutentication(false);

      localStorage.removeItem("BRECHO_DA_IT_USER");
      localStorage.removeItem("BRECHO_DA_IT_TOKEN");
    }

    if (requerid && (!user || !token)) {
      removeCredentials();

      navigate("/");
    }

    try {
      if (requerid) {
        const userRequest = await listOneUserRequest({});

        localStorage.setItem(
          "BRECHO_DA_IT_USER",
          JSON.stringify(userRequest.user)
        );

        user = userRequest.user;
      }

      return user;
    } catch (error) {
      removeCredentials();

      navigate("/");
    }
  };

  const createUser = async (data: any) => {
    const createToast = toast.loading("Criando", options);

    try {
      const success = await createUserRequest({ data });

      toast.update(createToast, {
        render: success.message,
        type: "success",
        isLoading: false,
        ...options,
      });

      setId(success.user.id);

      if (success.user.isConfirmedEmail) {
        const sendSMS = await solicitationCodeUserRequest({
          route: "create",
          solicitation: "sms",
          userId: success.user.id,
        });
        toast.success(sendSMS?.message);

        setIsOpenModal("ModalConfirmSmsCreateUser");
      } else {
        const sendEMAIL = await solicitationCodeUserRequest({
          route: "create",
          solicitation: "email",
          userId: success.user.id,
        });
        toast.success(sendEMAIL?.message);

        setIsOpenModal("ModalConfirmEmailCreateUser");
      }
    } catch (error: any) {
      toast.update(createToast, {
        render: error.message,
        type: "error",
        isLoading: false,
        ...options,
      });
    }
  };

  const solicitationCode = async (
    solicitation: ISolicitationCodeUserRequest,
    returnMessage: boolean = false
  ) => {
    try {
      const success = await solicitationCodeUserRequest(solicitation);
      if (returnMessage) {
        return success.message;
      } else {
        toast.success(success.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const loginRequest = async (data: IDataInitSessionUserRequest) => {
    const loginToast = toast.loading("Iniciando sessão", options);

    try {
      const bodyData: IInitSessionUserRequest = {
        data: {
          email: data.email,
          password: data.password,
        },
      };

      const success = await initSessionUserRequest(bodyData);

      localStorage.setItem("BRECHO_DA_IT_TOKEN", success.token);
      localStorage.setItem("BRECHO_DA_IT_USER", JSON.stringify(success.user));

      if (success.user.id) {
        toast.update(loginToast, {
          render: success.message,
          type: "success",
          isLoading: false,
          ...options,
        });
        setIsAutentication(true);

        navigate("");
      }
    } catch (error: any) {
      setIsAutentication(false);

      toast.update(loginToast, {
        render: error.message,
        type: "error",
        isLoading: false,
        ...options,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAutentication,
        createUser,
        solicitationCode,
        loginRequest,
        getUserStorgeOrRedirectAndRequired,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

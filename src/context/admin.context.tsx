import { createContext, ReactNode, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listOneUserRequest } from "../services/api/user/request.user";

interface IAuthAdminContext {
  verifyIsAdmin: any;
}

interface IAuthAdminProps {
  children: ReactNode;
}

const AuthAdminContext = createContext<IAuthAdminContext>(
  {} as IAuthAdminContext
);

export const AuthAdminProvider = ({ children }: IAuthAdminProps) => {
  const navigate = useNavigate();

  const verifyIsAdmin = async () => {
    let user: any = "";

    if (localStorage.BRECHO_DA_IT_USER && localStorage.BRECHO_DA_IT_TOKEN) {
      user = JSON.parse(localStorage.BRECHO_DA_IT_USER);
      const admin: any = await listOneUserRequest(user.id);
      if (admin.user.authorizationLevel !== 1) {
        return navigate("/inicial");
      }
    } else {
      return navigate("/inicial");
    }
  };
  useEffect(() => {
    verifyIsAdmin();
  }, []);
  return (
    <AuthAdminContext.Provider value={{ verifyIsAdmin }}>
      {children}
    </AuthAdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AuthAdminContext);

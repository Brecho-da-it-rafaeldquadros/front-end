import { useNavigate } from "react-router-dom";
import Icons from "../../../services/icons/icons";
import {
  StyledAsideDesk,
  StyledAsideMenuDesk,
  StyledButtonMenuDesk,
} from "./style";

const AsideDesk = () => {
  const navigate = useNavigate();
  return (
    <StyledAsideDesk>
      <StyledAsideMenuDesk>
        <StyledButtonMenuDesk onClick={() => navigate("/admin/inicio")}>
          <Icons.Home /> <p>INICIO</p>
        </StyledButtonMenuDesk>
        <StyledButtonMenuDesk onClick={() => navigate("/admin/usuarios")}>
          <Icons.User /> <p>USUARIOS</p>
        </StyledButtonMenuDesk>
      </StyledAsideMenuDesk>
      <StyledAsideMenuDesk>
        <StyledButtonMenuDesk onClick={() => navigate("/admin/produtos")}>
          <Icons.Table /> <p>PRODUTOS</p>
        </StyledButtonMenuDesk>
      </StyledAsideMenuDesk>
    </StyledAsideDesk>
  );
};

export default AsideDesk;

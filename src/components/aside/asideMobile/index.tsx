import { useNavigate } from "react-router-dom";
import Icons from "../../../services/icons/icons";
import Button from "../../button";
import { StyledAsideMobile, StyledAsideItem, StyledWellcome } from "./style";

const AsideMobile = () => {
  const navigate = useNavigate();
  return (
    <StyledAsideMobile>
      <StyledWellcome>
        <h2>Bem vindo, essa é a área administrativa</h2>
      </StyledWellcome>
      <StyledAsideItem>
        <Button
          type="button"
          color="gold"
          size="large"
          onclick={() => navigate("/admin/inicio")}
        >
          <Icons.Home /> <p>INICIO</p>
        </Button>
      </StyledAsideItem>
      <StyledAsideItem>
        <Button
          type="button"
          color="gold"
          size="large"
          onclick={() => navigate("/admin/usuarios")}
        >
          <Icons.User /> <p>USUARIOS</p>
        </Button>
      </StyledAsideItem>
      <StyledAsideItem>
        <Button
          type="button"
          color="gold"
          size="large"
          onclick={() => navigate("/admin/produtos")}
        >
          <Icons.Table /> <p>PRODUTOS</p>
        </Button>
      </StyledAsideItem>
    </StyledAsideMobile>
  );
};

export default AsideMobile;

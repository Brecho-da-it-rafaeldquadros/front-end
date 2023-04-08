import { StyledHeaderCart } from "./style";
import logoBrecho from "../../assets/images/logoBrechoDaIt2.png";
import { useNavigate } from "react-router-dom";

const HeaderCart = () => {
  const navigate = useNavigate();

  return (
    <StyledHeaderCart>
      <img alt="Logo Brechó da IT " onClick={() => navigate("/")} />
    </StyledHeaderCart>
  );
};

export default HeaderCart;

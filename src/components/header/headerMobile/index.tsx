import logo from "../../../assets/images/Icon-Silver-Png.png";
import menu from "../../../assets/menuIcons/menu.png";
import Icons from "../../../services/icons/icons";
import { useMenu } from "../../../context/menu.context";
import {
  StyledButtonGlass,
  StyledHeader,
  StyledImgHeaderMobile,
} from "./style";
import { useNavigate } from "react-router-dom";

const HeaderMobile = () => {
  const { handleMenu } = useMenu();
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <section>
        <div>
          <StyledImgHeaderMobile
            src={logo}
            alt="brecho da it"
            onClick={() => navigate("/inicio")}
          />
        </div>
        <div>
          <StyledButtonGlass onClick={() => handleMenu("search")}>
            <Icons.Glass />
          </StyledButtonGlass>
          <StyledButtonGlass onClick={() => navigate("/carrinho")}>
            <Icons.CartBag />
          </StyledButtonGlass>
          <StyledButtonGlass onClick={() => handleMenu("menu")}>
            <img src={menu} alt="imagem do menu" />
          </StyledButtonGlass>
        </div>
      </section>
    </StyledHeader>
  );
};

export default HeaderMobile;

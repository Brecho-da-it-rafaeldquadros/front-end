import { useNavigate } from "react-router-dom";
import { StyledButtonGold, StyledSectionLogin } from "./style";

const LoginMobile = () => {
  const navigate = useNavigate();
  return (
    <StyledSectionLogin>
      {localStorage.BRECHO_DA_IT_USER ? (
        <StyledButtonGold
          onClick={() => {
            localStorage.clear();
            navigate("/inicio");
          }}
        >
          SAIR
        </StyledButtonGold>
      ) : (
        <>
          <StyledButtonGold onClick={() => navigate("/sessao")}>
            LOGIN
          </StyledButtonGold>
          <StyledButtonGold onClick={() => navigate("/cadastro")} color="black">
            CADASTRO
          </StyledButtonGold>{" "}
        </>
      )}
    </StyledSectionLogin>
  );
};
export default LoginMobile;

import { StyledHeaderDesk, StyledLoginDesk, StyledMotionForm } from "./style";
import { StyledButtonGlass } from "../headerMobile/style";

import logo from "../../../assets/images/02FullLogo-Silver-Png.png";
import Icons from "../../../services/icons/icons";
import { useMenu } from "../../../context/menu.context";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ISearch } from "../searchMenu";
import { schemaSearch } from "../../../validations/menu.validation";
import { StyledSearchInput } from "../searchMenu/style";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const HeaderDesktop = () => {
  const { handleSearch } = useMenu();
  let user: any = "";
  if (localStorage.BRECHO_DA_IT_USER) {
    user = JSON.parse(localStorage.BRECHO_DA_IT_USER);
  }
  const {
    handleSubmit,
    register,
    formState: {
      errors: { search },
    },
  } = useForm<ISearch>({
    resolver: yupResolver(schemaSearch),
  });
  const [isVisible, setIsVisible] = useState(false);

  return (
    <StyledHeaderDesk>
      <section className="sectionHeader">
        <div className="boxIcons">
          <Link to="/">
            <img src={logo} alt="Brecho da It" />
          </Link>
        </div>
        <AnimatePresence>
          {isVisible && (
            <StyledMotionForm
              onSubmit={handleSubmit(handleSearch)}
              initial={{ width: "0%" }}
              transition={{ duration: 0.5 }}
              animate={{ width: "50%" }}
              exit={{ width: "0%" }}
            >
              <StyledSearchInput>
                <input
                  type="text"
                  id="search"
                  placeholder="Pesquisar"
                  {...register("search")}
                />

                <button type="submit">
                  <Icons.Glass />
                </button>
              </StyledSearchInput>
            </StyledMotionForm>
          )}
        </AnimatePresence>
        <div className="boxIcons">
          {isVisible ? (
            <StyledButtonGlass onClick={() => setIsVisible(!isVisible)}>
              <Icons.CloseSearch />
            </StyledButtonGlass>
          ) : (
            <StyledButtonGlass onClick={() => setIsVisible(!isVisible)}>
              <Icons.Glass />
            </StyledButtonGlass>
          )}
          {localStorage.BRECHO_DA_IT_TOKEN ? (
            <StyledLoginDesk className="sectionLogin">
              <div>
                <p>Olá {user.fullName}</p>
                {user.authorizationLevel == 1 && (
                  <>
                    <p></p>
                    <p>|</p>
                  </>
                )}
                {user.authorizationLevel == 1 && (
                  <Link to="/admin">ADMIN PAGE</Link>
                )}
              </div>
              <div>
                <Link to="/perfil">MINHA CONTA </Link>
                <p> </p>
                <p>|</p>
                <Link to="/inicio" onClick={() => localStorage.clear()}>
                  SAIR
                </Link>
              </div>
            </StyledLoginDesk>
          ) : (
            <StyledLoginDesk className="sectionLogin">
              <div>
                <p>Iniciar</p> <Link to="/sessao">SESSÃO</Link>
              </div>
              <div>
                <p>ou fazer</p> <Link to="/cadastro">CADASTRO</Link>
              </div>
            </StyledLoginDesk>
          )}
          <StyledButtonGlass>
            <Link to="/carrinho">
              <Icons.CartBag />
            </Link>
          </StyledButtonGlass>
        </div>
      </section>
    </StyledHeaderDesk>
  );
};
export default HeaderDesktop;

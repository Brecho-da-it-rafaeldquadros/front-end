import HeaderCart from "../../components/headerCart";
import Input from "../../components/input";
import { LinkPassword, StyledLoginPage } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../validations/user.validation";
import Copyright from "../../components/copyright";
import { useAuth } from "../../context/auth.context";
import Footer from "../../components/footer";
import CheckBox from "../../components/checkBox";
import Button from "../../components/button";

export const LoginPage = () => {
  const { loginRequest } = useAuth()
  
  const {
    register,
    handleSubmit,
    formState: {
      errors: { email, password },
    },
  } = useForm<any>({
    resolver: yupResolver(schemaLogin),
  });

  return (
    <StyledLoginPage>
      <div className="organization">
        <HeaderCart />
        <form onSubmit={handleSubmit(loginRequest)}>
          <h3 className="form__title">
            FAZER LOGIN
          </h3>
          <Input
            register={register}
            placeholder="Email"
            name="email"
            message={email ? `${email.message}` : undefined}
            maxwidth="100%"
          />
          <Input
            register={register}
            placeholder="Senha"
            name="password"
            iconposition="right"
            message={password ? `${password.message}` : undefined}
            maxwidth="100%"
            type="password"
          />
          
          <LinkPassword to="/recuperar-conta">ESQUECEU A SENHA?</LinkPassword>

          <Button 
            type="submit" 
            color="gold" 
            size="medium"
          >
            Iniciar
          </Button>
          <CheckBox
            text="Novo no Brecho da It?"
            linkname="CADASTRE-SE"
            link="/cadastro"
            target="_self"
            position="center"
            removeCheck
          />
        </form>
      </div>
      <div className="organization">
        <Footer />
        <Copyright />
      </div>
    </StyledLoginPage>
  );
};

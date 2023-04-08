import HeaderCart from "../../components/headerCart";
import { StyledRegisterPage } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCreateUser } from "../../validations/user.validation";
import Copyright from "../../components/copyright";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth.context";
import Footer from "../../components/footer";
import Input from "../../components/input";
import Button from "../../components/button";
import CheckBox from "../../components/checkBox";
import Select from "../../components/select";
import { IDataResponseConfirmCodeUserRequest } from "../../services/api/user/interface.user";

export const RegisterPage = () => {
  const { createUser, getUserStorgeOrRedirectAndRequired } = useAuth();

  const [captchaVerify, setCaptchaVerify] = useState<boolean>(false);

  const [user, setUser] = useState<IDataResponseConfirmCodeUserRequest>(
    {} as IDataResponseConfirmCodeUserRequest
  );

  useEffect(() => {
    (async () => {
      try {
        const user = await getUserStorgeOrRedirectAndRequired({});

        setUser(user);
      } catch (error) {}
    })();
  }, []);

  const isLevelOneUser = user && user?.authorizationLevel === 1;

  const handleVerify = () => {
    setCaptchaVerify(true);
  };

  const {
    register,
    handleSubmit,
    formState: {
      errors: {
        fullName,
        email,
        confirmEmail,
        password,
        confimPassword,
        phone,
        authorizationLevel,
        isTermsAccepted,
      },
    },
  } = useForm<any>({
    resolver: yupResolver(schemaCreateUser),
  });

  return (
    <StyledRegisterPage>
      <>
        <HeaderCart />
        <form onSubmit={handleSubmit(createUser)}>
          <h3 className="form__title">Novo Cadastro</h3>
          <Input
            register={register}
            placeholder="Nome Completo"
            name="fullName"
            message={fullName ? `${fullName.message}` : undefined}
            maxwidth="100%"
          />
          <Input
            register={register}
            placeholder="Email"
            name="email"
            message={email ? `${email.message}` : undefined}
            maxwidth="100%"
          />
          <Input
            register={register}
            placeholder="Confirmar Email"
            name="confirmEmail"
            message={confirmEmail ? `${confirmEmail.message}` : undefined}
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
          <Input
            register={register}
            placeholder="Confirmar Senha"
            name="confirmPassword"
            iconposition="right"
            message={confimPassword ? `${confimPassword.message}` : undefined}
            maxwidth="100%"
            type="password"
          />
          <Input
            register={register}
            placeholder="Celular"
            name="phone"
            message={phone ? `${phone.message}` : undefined}
            maxwidth="100%"
          />
          {isLevelOneUser && (
            <Select
              placeholder="Nível de autorização"
              name="authorizationLevel"
              message={
                authorizationLevel ? `${authorizationLevel.message}` : undefined
              }
              register={register}
              maxwidth="100%"
              options={["1", "3"]}
            />
          )}
          <CheckBox
            register={register}
            name="isTermsAccepted"
            text="Aceito os"
            message={isTermsAccepted ? `${isTermsAccepted.message}` : undefined}
            linkname="Termos e políticas de privacidade"
            position="center"
            link="/privacidade"
            target="_self"
          />
          <GoogleReCaptchaProvider reCaptchaKey="6LeMUUElAAAAAHdfsvaRVpj0NKuX8_GD1Q4QPezA">
            <GoogleReCaptcha onVerify={handleVerify} />
          </GoogleReCaptchaProvider>
          <Button type="submit" color="gold" size="medium" margin="0px">
            Cadastrar
          </Button>
          <CheckBox
            name="isAcceptTerms"
            text="Já possui cadastro?"
            linkname="ENTRAR"
            link="/sessao"
            position="center"
            target="_self"
            removeCheck
          />
        </form>
      </>
      <>
        <Footer />
        <Copyright />
      </>
    </StyledRegisterPage>
  );
};

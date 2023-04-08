import Button from "../components/button";
import CheckBox from "../components/checkBox";
import Input from "../components/input";
import Modal from "../components/modal";
import Select from "../components/select";
import { useAuth } from "../context/auth.context";
import { useMenu } from "../context/menu.context";
import { useModal } from "../context/modal.context";
import { useRequest } from "../context/request.context";
import { IAuth } from "../services/api/interface.global";
import { listUserRequest } from "../services/api/user/request.user";
import {
  schemaAuthentication,
  schemaCreateUser,
  schemaUpdatePasswordUser,
  schemaUpdateUser,
} from "../validations/user.validation";

const UserModals = () => {
  const { createUserRequest, updateUserRequest, deactivateUserRequest } =
    useRequest();
  const { setIsOpenModal, setData, data, id, setId } = useModal();
  const { solicitationCode } = useAuth();
  const { setUsers, setQtUserPages, page } = useMenu();

  return (
    <>
      <Modal
        keyOpenModal="ModalCreateUser"
        nameModal="USUÁRIO"
        schema={schemaCreateUser}
        onSubmit={async (createData: any) => {
          const success = await createUserRequest({ data: createData });

          await updateUserRequest({
            auth: data,
            data: { isActive: true },
            userId: success.user.id,
          });

          return "Usuario criado e ativado";
        }}
        components={({ register, formState: { errors } }, setDataModal) => (
          <>
            <Input
              register={register}
              placeholder="Nome Completo"
              name="fullName"
              message={
                errors?.fullName ? `${errors?.fullName?.message}` : undefined
              }
              maxwidth="100%"
            />
            <Input
              register={register}
              placeholder="Email"
              name="email"
              message={errors?.email ? `${errors?.email?.message}` : undefined}
              maxwidth="100%"
            />
            <Input
              register={register}
              placeholder="Confirmar Email"
              name="confirmEmail"
              message={
                errors?.confirmEmail
                  ? `${errors?.confirmEmail.message}`
                  : undefined
              }
              maxwidth="100%"
            />
            <Input
              register={register}
              placeholder="Senha"
              name="password"
              iconposition="right"
              message={
                errors?.password ? `${errors?.password.message}` : undefined
              }
              maxwidth="100%"
              type="password"
            />
            <Input
              register={register}
              placeholder="Confirmar Senha"
              name="confirmPassword"
              iconposition="right"
              message={
                errors?.confimPassword
                  ? `${errors?.confimPassword.message}`
                  : undefined
              }
              maxwidth="100%"
              type="password"
            />
            <Input
              register={register}
              placeholder="Celular"
              name="phone"
              message={errors?.phone ? `${errors?.phone.message}` : undefined}
              maxwidth="100%"
            />
            <Select
              placeholder="Nível de autorização"
              name="authorizationLevel"
              message={
                errors?.authorizationLevel
                  ? `${errors?.authorizationLevel.message}`
                  : undefined
              }
              register={register}
              maxwidth="100%"
              options={["1", "3"]}
            />
            <CheckBox
              register={register}
              name="isTermsAccepted"
              text="Aceito os"
              message={
                errors?.isTermsAccepted
                  ? `${errors?.isTermsAccepted.message}`
                  : undefined
              }
              linkname="Termos e políticas de privacidade"
              position="center"
              link="/privacidade"
              target="_self"
            />
            <Button type="submit" color="blue" size="medium">
              Adicionar
            </Button>
          </>
        )}
      />

      <Modal
        keyOpenModal="ModalAutenticationCreateUser"
        nameModal="AUTENTICAÇÃO"
        disableAutoClose
        schema={schemaAuthentication}
        onSubmit={async (data: IAuth) => {
          await updateUserRequest({ auth: data, data: {} });

          setData(data);
          setIsOpenModal("ModalCreateUser");

          return "Permitido";
        }}
        components={({ register, formState: { errors } }, setDataModal) => (
          <>
            <Input
              placeholder="senha"
              name="password"
              message={
                errors?.password
                  ? (errors?.password?.message as string)
                  : undefined
              }
              type="password"
              iconposition="right"
              register={register}
              maxwidth="100%"
            />
            <Button type="submit" color="gold" size="medium">
              Solicitar
            </Button>
          </>
        )}
      />

      <Modal
        keyOpenModal="ModalAutenticationUpdatePasswordUser"
        nameModal="AUTENTICAÇÃO"
        disableAutoClose
        schema={schemaAuthentication}
        onSubmit={async (data: IAuth) => {
          await updateUserRequest({ auth: data, data: {} });

          setData(data);
          setIsOpenModal("ModalUpdatePasswordUser");

          return "Permitido";
        }}
        components={({ register, formState: { errors } }, setDataModal) => (
          <>
            <Input
              placeholder="senha"
              name="password"
              message={
                errors?.password
                  ? (errors?.password?.message as string)
                  : undefined
              }
              type="password"
              iconposition="right"
              register={register}
              maxwidth="100%"
            />
            <Button type="submit" color="gold" size="medium">
              Solicitar
            </Button>
          </>
        )}
      />

      <Modal
        keyOpenModal="ModalAutenticationUpdateUser"
        nameModal="AUTENTICAÇÃO"
        disableAutoClose
        schema={schemaAuthentication}
        onSubmit={async (data: IAuth) => {
          const success = await updateUserRequest({ auth: data, data: {} });

          setData((current: object) => {
            return { ...current, data: data };
          });
          setIsOpenModal("ModalUpdateUser");

          return success.message;
        }}
        components={({ register, formState: { errors } }, setDataModal) => (
          <>
            <Input
              placeholder="senha"
              name="password"
              message={
                errors?.password
                  ? (errors?.password?.message as string)
                  : undefined
              }
              type="password"
              iconposition="right"
              register={register}
              maxwidth="100%"
            />
            <Button type="submit" color="gold" size="medium">
              Solicitar
            </Button>
          </>
        )}
      />

      <Modal
        keyOpenModal="ModalUpdatePasswordUser"
        nameModal="USUÁRIO"
        disableAutoClose
        schema={schemaUpdatePasswordUser}
        onSubmit={async (update: any) => {
          const success = await updateUserRequest({ auth: data, data: update });
          await solicitationCode({
            route: "update",
            solicitation: "sms",
            userId: id!,
          });

          setIsOpenModal("ModalConfirmSmsUpdateUser");

          return success.message;
        }}
        components={({ register, formState: { errors } }, setDataModal) => (
          <>
            <Input
              placeholder="Nova senha"
              name="password"
              message={
                errors?.password
                  ? (errors?.password?.message as string)
                  : undefined
              }
              type="text"
              iconposition="right"
              register={register}
              maxwidth="100%"
            />
            <Input
              placeholder="Confirmar senha"
              name="confirmPassword"
              message={
                errors?.confirmPassword
                  ? (errors?.confirmPassword?.message as string)
                  : undefined
              }
              type="text"
              iconposition="right"
              register={register}
              maxwidth="100%"
            />
            <Button type="submit" color="gold" size="medium">
              Confirmar
            </Button>
          </>
        )}
      />

      <Modal
        keyOpenModal="ModalDeactivateUser"
        nameModal="AUTENTICAÇÃO"
        schema={schemaAuthentication}
        onSubmit={async (data: any) => {
          const success = await deactivateUserRequest({ auth: data });

          return success.message;
        }}
        components={({ register, formState: { errors } }, setDataModal) => (
          <>
            <Input
              placeholder="senha"
              name="password"
              message={
                errors?.trackingCode
                  ? (errors?.trackingCode?.message as string)
                  : undefined
              }
              type="text"
              register={register}
              maxwidth="100%"
            />
            <Button type="submit" color="red" size="medium">
              Desativar
            </Button>
          </>
        )}
      />

      <Modal
        keyOpenModal="ModalUpdateUser"
        nameModal="USUÁRIO"
        schema={schemaUpdateUser}
        disableAutoClose
        onSubmit={async (update: any) => {
          const list = Object.entries(update);

          const serializerList = list.filter((item) => item[1] !== "");

          if (serializerList.length === 0) {
            setIsOpenModal(undefined);
            setId(undefined);
            return "Nada para atualizar";
          }

          await updateUserRequest({ auth: data.data, data: update });

          if (
            Object.fromEntries(serializerList)?.fullName &&
            serializerList.length === 1
          ) {
            setIsOpenModal(undefined);
            setId(undefined);
            return "Nome atualizado";
          } else {
            const message = await solicitationCode({
              route: "update",
              solicitation: "sms",
              userId: data.user.id!,
            });

            setIsOpenModal("ModalConfirmSmsUpdateUser");
            return message!;
          }
        }}
        components={({ register, formState: { errors } }, setDataModal) => (
          <>
            <Input
              placeholder="Nome completo"
              name="fullName"
              message={
                errors?.fullName
                  ? (errors?.fullName?.message as string)
                  : undefined
              }
              type="text"
              register={register}
              maxwidth="100%"
            />
            {data?.user?.authorizationLevel === 1 && (
              <>
                <Input
                  placeholder="Email"
                  name="email"
                  message={
                    errors?.email
                      ? (errors?.email?.message as string)
                      : undefined
                  }
                  type="text"
                  register={register}
                  maxwidth="100%"
                />
                <Input
                  placeholder="Confirmar Email"
                  name="confirmEmail"
                  message={
                    errors?.confirmEmail
                      ? (errors?.confirmEmail?.message as string)
                      : undefined
                  }
                  type="text"
                  register={register}
                  maxwidth="100%"
                />
              </>
            )}
            <Input
              placeholder="Celular"
              name="phone"
              message={
                errors?.phone ? (errors?.phone?.message as string) : undefined
              }
              type="text"
              register={register}
              maxwidth="100%"
            />
            {data?.user?.authorizationLevel === 1 && (
              <Select
                placeholder="Nível de autorização"
                name="authorizationLevel"
                message={
                  errors?.authorizationLevel
                    ? (errors?.authorizationLevel?.message as string)
                    : undefined
                }
                register={register}
                maxwidth="100%"
                options={["1", "3"]}
              />
            )}
            <Button type="submit" color="gold" size="medium">
              Atualizar
            </Button>
          </>
        )}
      />

      <Modal
        keyOpenModal="ModalAutenticationActivateUser"
        nameModal="AUTENTICAÇÃO"
        schema={schemaAuthentication}
        onSubmit={async (data: IAuth) => {
          await updateUserRequest({
            auth: data,
            data: { isActive: true },
            userId: id,
          });

          return "Usuario ativado";
        }}
        components={({ register, formState: { errors } }, setDataModal) => (
          <>
            <Input
              placeholder="senha"
              name="password"
              message={
                errors?.password
                  ? (errors?.password?.message as string)
                  : undefined
              }
              type="text"
              iconposition="right"
              register={register}
              maxwidth="100%"
            />
            <Button type="submit" color="gold" size="medium">
              Ativar
            </Button>
          </>
        )}
      />
      <Modal
        keyOpenModal="ModalCreateUserAdmin"
        nameModal="USUARIO"
        schema={schemaCreateUser}
        onSubmit={async (createData: any) => {
          const success = await createUserRequest({ data: createData });

          await updateUserRequest({
            auth: data,
            data: { isActive: true },
            userId: success.user.id,
          });

          const response = await listUserRequest(page);
          setUsers(response.result);
          setQtUserPages(response.amountPage);

          return success.message;
        }}
        components={({ register, formState: { errors } }, setDataModal) => (
          <>
            <Input
              register={register}
              placeholder="Nome Completo"
              name="fullName"
              message={
                errors?.fullName ? `${errors?.fullName?.message}` : undefined
              }
              maxwidth="100%"
            />
            <Input
              register={register}
              placeholder="Email"
              name="email"
              message={errors?.email ? `${errors?.email?.message}` : undefined}
              maxwidth="100%"
            />
            <Input
              register={register}
              placeholder="Confirmar Email"
              name="confirmEmail"
              message={
                errors?.confirmEmail
                  ? `${errors?.confirmEmail.message}`
                  : undefined
              }
              maxwidth="100%"
            />
            <Input
              register={register}
              placeholder="Senha"
              name="password"
              iconposition="right"
              message={
                errors?.password ? `${errors?.password.message}` : undefined
              }
              maxwidth="100%"
              type="password"
            />
            <Input
              register={register}
              placeholder="Confirmar Senha"
              name="confirmPassword"
              iconposition="right"
              message={
                errors?.confimPassword
                  ? `${errors?.confimPassword.message}`
                  : undefined
              }
              maxwidth="100%"
              type="password"
            />
            <Input
              register={register}
              placeholder="Celular"
              name="phone"
              message={errors?.phone ? `${errors?.phone.message}` : undefined}
              maxwidth="100%"
            />
            <Select
              placeholder="Nível de autorização"
              name="authorizationLevel"
              message={
                errors?.authorizationLevel
                  ? `${errors?.authorizationLevel.message}`
                  : undefined
              }
              register={register}
              maxwidth="100%"
              options={["1", "3"]}
            />
            <CheckBox
              register={register}
              name="isTermsAccepted"
              text="Aceito os"
              message={
                errors?.isTermsAccepted
                  ? `${errors?.isTermsAccepted.message}`
                  : undefined
              }
              linkname="Termos e políticas de privacidade"
              position="center"
              link="/privacidade"
              target="_self"
            />
            <Button type="submit" color="blue" size="medium">
              Adicionar
            </Button>
          </>
        )}
      />
      <Modal
        keyOpenModal="ModalAutenticationCreateUserAdmin"
        nameModal="AUTENTICAÇÃO"
        disableAutoClose
        schema={schemaAuthentication}
        onSubmit={async (data: IAuth) => {
          await updateUserRequest({ auth: data, data: {} });

          setData(data);
          setIsOpenModal("ModalCreateUserAdmin");

          return "Permitido";
        }}
        components={({ register, formState: { errors } }, setDataModal) => (
          <>
            <Input
              placeholder="senha"
              name="password"
              message={
                errors?.password
                  ? (errors?.password?.message as string)
                  : undefined
              }
              type="password"
              iconposition="right"
              register={register}
              maxwidth="100%"
            />
            <Button type="submit" color="gold" size="medium">
              Solicitar
            </Button>
          </>
        )}
      />
    </>
  );
};

export default UserModals;

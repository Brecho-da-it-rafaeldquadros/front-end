import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import CheckBox from "../components/checkBox";
import Input from "../components/input";
import Modal from "../components/modal";
import { useAuth } from "../context/auth.context";
import { useModal } from "../context/modal.context";
import { useRequest } from "../context/request.context";
import { schemaCode } from "../validations/user.validation";

const CodeModals = () => {
  const { id, data:modalData, setIsOpenModal } = useModal();
  const { solicitationCode, loginRequest } = useAuth()

  const navigate = useNavigate()
  const { confirmCodeUserRequest } = useRequest()
  
  return (
    <>
      <Modal
        keyOpenModal="ModalConfirmSmsRetrieveAccount"
        nameModal="CONFIRMAR SMS"
        schema={ schemaCode }
        onSubmit={ async ( data:any) => { 

          const sucess = await confirmCodeUserRequest({ confirm:"sms", data, route:"retrieveAccount", userId:id! })

          await loginRequest({ email:modalData.email, password:modalData.newPassword })

          return sucess.message
        }}
        components={( { register, formState:{ errors }}, setDataModal )=>(
          <>
            <Input
              placeholder="Código"
              name="code"
              message={ errors?.code ? errors?.code?.message as string : undefined }
              type="text"
              register={ register}
              maxwidth="100%"
            />
            <Button type="submit" color="gold" size="medium" margin="20px 0px">
              Verificar
            </Button>
            <CheckBox
              text="Novo código?"
              linkname="SOLICITAR"
              onClick={ async ()=> await solicitationCode({ route:"retrieveAccount", solicitation:"sms", userId:id! }) }
              position="center"
              removeCheck
            />
          </>
        )}
    />

    <Modal
        keyOpenModal="ModalConfirmSmsUpdateUser"
        nameModal="CONFIRMAR SMS"
        schema={ schemaCode }
        onSubmit={ async ( data:any) => { 

          const sucess = await confirmCodeUserRequest({ confirm:"sms", data, route:"update", userId:data.user.id! })

          return sucess.message
        }}
        components={( { register, formState:{ errors }}, setDataModal )=>(
          <>
            <Input
              placeholder="Código"
              name="code"
              message={ errors?.code ? errors?.code?.message as string : undefined }
              type="text"
              register={ register}
              maxwidth="100%"
            />
            <Button type="submit" color="gold" size="medium" margin="20px 0px">
              Verificar
            </Button>
            <CheckBox
              text="Novo código?"
              linkname="SOLICITAR"
              onClick={ async ()=> await solicitationCode({ route:"update", solicitation:"sms", userId:id! }) }
              position="center"
              removeCheck
            />
          </>
        )}
    />

    <Modal
      keyOpenModal="ModalConfirmEmailCreateUser"
      nameModal="CONFIRMAR EMAIL"
      schema={ schemaCode }
      disableAutoClose
      onSubmit={ async ( data:any) => { 

        const success = await confirmCodeUserRequest({ confirm:"email", data, route:"create", userId:id! })

        await solicitationCode({ route:"create", solicitation:"sms", userId:id! })

        setIsOpenModal("ModalConfirmSmsCreateUser")
        
        return success.message
      }}
      components={( { register, formState:{ errors }}, setDataModal )=>(
        <>
          <Input
            placeholder="Código"
            name="code"
            message={ errors?.code ? errors?.code?.message as string : undefined }
            type="text"
            register={ register}
            maxwidth="100%"
          />
          <Button type="submit" color="gold" size="medium" margin="20px 0px">
            Verificar
          </Button>
          <CheckBox
            text="Novo código?"
            linkname="SOLICITAR"
            onClick={ async ()=> await solicitationCode({ route:"create", solicitation:"email", userId:id! })}
            position="center"
            removeCheck
          />
        </>
      )}
    />

    <Modal
      keyOpenModal="ModalConfirmSmsCreateUser"
      nameModal="CONFIRMAR SMS"
      schema={ schemaCode }
      onSubmit={ async ( data:any) => { 
       
        const sucess = await confirmCodeUserRequest({ confirm:"sms", data, route:"create", userId:id! })

        navigate("/sessao")

        return sucess.message
      }}
      components={( { register, formState:{ errors }}, setDataModal )=>(
        <>
          <Input
            placeholder="Código"
            name="code"
            message={ errors?.code ? errors?.code?.message as string : undefined }
            type="text"
            register={ register}
            maxwidth="100%"
          />
          <Button type="submit" color="gold" size="medium" margin="20px 0px">
            Verificar
          </Button>
          <CheckBox
            text="Novo código?"
            linkname="SOLICITAR"
            onClick={ async ()=> await solicitationCode({ route:"create", solicitation:"sms", userId:id! })}
            position="center"
            removeCheck
          />
        </>
      )}
    />

    <Modal
      keyOpenModal="ModalConfirmCodeUpdateUserSMS"
      nameModal="CONFIRMAR SMS"
      schema={ schemaCode }
      onSubmit={ async ( data:any) => { 
       
        const sucess = await confirmCodeUserRequest({ confirm:"sms", data, route:"update", userId:id! })

        return sucess.message
      }}
      components={( { register, formState:{ errors }}, setDataModal )=>(
        <>
          <Input
            placeholder="Código"
            name="code"
            message={ errors?.code ? errors?.code?.message as string : undefined }
            type="text"
            register={ register}
            maxwidth="100%"
          />
          <Button type="submit" color="gold" size="medium" margin="20px 0px">
            Verificar
          </Button>
          <CheckBox
            text="Novo código?"
            linkname="SOLICITAR"
            onClick={ async ()=> await solicitationCode({ route:"update", solicitation:"sms", userId:id! })}
            position="center"
            removeCheck
          />
        </>
      )}
    />

    <Modal
      keyOpenModal="ModalConfirmCodeUpdateUserEmail"
      nameModal="CONFIRMAR EMAIL"
      schema={ schemaCode }
      onSubmit={ async ( data:any) => { 
       
        const sucess = await confirmCodeUserRequest({ confirm:"email", data, route:"update", userId:id! })

        return sucess.message
      }}
      components={( { register, formState:{ errors }}, setDataModal )=>(
        <>
          <Input
            placeholder="Código"
            name="code"
            message={ errors?.code ? errors?.code?.message as string : undefined }
            type="text"
            register={ register}
            maxwidth="100%"
          />
          <Button type="submit" color="gold" size="medium" margin="20px 0px">
            Verificar
          </Button>
          <CheckBox
            text="Novo código?"
            linkname="SOLICITAR"
            onClick={ async ()=> await solicitationCode({ route:"update", solicitation:"email", userId:id! })}
            position="center"
            removeCheck
          />
        </>
      )}
    />
  </>
  );
};

export default CodeModals;

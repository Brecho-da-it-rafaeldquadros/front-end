import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Button from '../../components/button';
import CheckBox from '../../components/checkBox';
import Copyright from '../../components/copyright';
import Footer from '../../components/footer';
import HeaderCart from '../../components/headerCart'
import Input from '../../components/input';
import { useModal } from '../../context/modal.context';
import { useRequest } from '../../context/request.context';
import { IDataRetrieiveAccountUserForm, IDataSendEmailUserForm } from '../../services/api/user/interface.user';
import { schemaRetrieveAccount, schemaSendEmail } from '../../validations/user.validation';
import { StyledRetrieveAccount } from './style'

const RetrieveAccount = () => {

  const { retrieiveAccountUserRequest, solicitationCodeUserRequest } = useRequest()

  const [ isEmail, setIsEmail ] = useState(false)

  const { setIsOpenModal, setId, setData } = useModal()

  const {
    register,
    handleSubmit,
    formState: {
      errors: { email, newPassword, confirmPassword },
    },
  } = useForm<any>({
    resolver: yupResolver( isEmail ? schemaRetrieveAccount : schemaSendEmail ),
  });

  const sendEmail = ( data:IDataSendEmailUserForm ) => setIsEmail(true)
    
  const sendRetrieveAccount = async ( { confirmPassowrd, ...data }:IDataRetrieiveAccountUserForm ) => {

    try {
      const success = await retrieiveAccountUserRequest({ data })

      const sendSMS = await solicitationCodeUserRequest({ route:"retrieveAccount", solicitation:"sms", userId:success.user.id })

      toast.success(sendSMS.message)

      setId(success.user.id)
      setData(data)
      setIsOpenModal("ModalConfirmSmsRetrieveAccount")
      
    } catch (error:any) {
      toast.error(error.message)
    }
  }

  return (
    <StyledRetrieveAccount>
       <div className="organization">
        <HeaderCart />
        <form onSubmit={handleSubmit( isEmail ? sendRetrieveAccount : sendEmail )}>
          <h3 className="form__title">
            RECUPEÇÃO DE CONTA
          </h3>
          <Input
            register={register}
            placeholder="Email"
            name="email"
            message={email ? `${email.message}` : undefined}
            maxwidth="100%"
            disabled={isEmail}
          />
          {isEmail&&
          <>
            <Input
              register={register}
              placeholder="Nova senha"
              name="newPassword"
              message={newPassword ? `${newPassword.message}` : undefined}
              type="password"
              iconposition="right"
              maxwidth="100%"
            />
            <Input
              register={register}
              placeholder="Confirmar senha"
              name="confirmPassword"
              type="password"
              iconposition="right"
              message={confirmPassword ? `${confirmPassword.message}` : undefined}
              maxwidth="100%"
            />
          </>
          }
          <Button
            type="submit" 
            color="gold" 
            size="medium"
          >
            { isEmail ? "Solicitar" : "Enviar"}
          </Button>
          <CheckBox
            name="isAcceptTerms"
            text="Já possui cadastro?"
            linkname="ENTRAR"
            link="/sessao"
            target="_self"
            removeCheck
          />
        </form>
      </div>
      <div className="organization">
        <Footer />
        <Copyright />
      </div>
    </StyledRetrieveAccount>
  )
}

export default RetrieveAccount

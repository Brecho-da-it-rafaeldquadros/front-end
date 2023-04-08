import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from '../../components/button'
import CardExtend from '../../components/cardExtend'
import { useAuth } from '../../context/auth.context'
import { useModal } from '../../context/modal.context'
import { useRequest } from '../../context/request.context'
import { IDataResponseConfirmCodeUserRequest } from '../../services/api/user/interface.user'
import Icons from '../../services/icons/icons'
import { Footer, Header, StyledUser, ModeADM } from './style'

const User = () => {

  const { userId } = useParams()
  const navigate = useNavigate()

  const { listOneUserRequest } = useRequest()
  const [ myUser, setMyUser ] = useState<IDataResponseConfirmCodeUserRequest>({} as IDataResponseConfirmCodeUserRequest)
  const { getUserStorgeOrRedirectAndRequired } = useAuth()
  const { setIsOpenModal, setData, setId, isOpenModal, clearStates } = useModal()
  const [ otherUser, setOtherUser ] = useState<IDataResponseConfirmCodeUserRequest>({} as IDataResponseConfirmCodeUserRequest)

  const isLevelOne = myUser?.authorizationLevel === 1

  useEffect(()=>{
    (async()=>{
      try {
        if(userId){
          const sucess = await listOneUserRequest({ userId })
          setOtherUser(sucess.user)
        }

        const user =  await getUserStorgeOrRedirectAndRequired( { requerid:true } )
        setMyUser(user)
        
      } catch (error:any) {
        toast.error(error.message)
        navigate("/")
      }
    })() 
  },[isOpenModal])

  useEffect(()=> ()=> { clearStates() },[])

  const hasUser = true
  const viewUser = userId ? otherUser : myUser

  return (
    <StyledUser>
      <div className='user__header'>

        <h2 className='user_title'>
          <Icons.User/>
          <ModeADM>

            PERFIL
            {userId&&<p>MODO ADMIN</p>}

          </ModeADM> 
        </h2>

        {isLevelOne&&!userId&&
          <Button margin="0px" type="button" color="blue" size="small" onclick={()=>{
            setIsOpenModal("ModalAutenticationCreateUser")
          }}>
            <Icons.Add size={25}/>
          </Button>
        }

      </div>
       
      {hasUser&&
        <CardExtend
          disableExtend
          key={viewUser?.id}
          sessions={[
            {
              "Id":viewUser?.id,
              "Nome completo":viewUser?.fullName,
              "Autorização":viewUser?.authorizationLevel,
            },
            {
              "Email":viewUser?.email,
              "Email confirmado":viewUser?.isConfirmedEmail ? "SIM" : "NÃO",
              "Celular": viewUser?.phone,
              "Celular confirmado":viewUser?.isConfirmedPhone ? "SIM" : "NÃO"
            },
            {
              "Criado":viewUser?.createdAt,
              "Atualizado":viewUser?.updatedAt
            }
          ]}
          header={
            <Header>
              <h3>
                INFORMAÇÕES
              </h3>
            </Header>
          }
          footer={
            <Footer>
              <Button margin='10px' maxwidth="200px" type="button" color="gold" size="medium" onclick={()=>{
                setIsOpenModal("ModalAutenticationUpdatePasswordUser")
                setId(viewUser?.id)
              }}>
                Alterar senha
              </Button>
              <Button margin='10px' maxwidth="200px" type="button" color="gold" size="medium" onclick={()=>{
                setData({ user:viewUser })
                setIsOpenModal("ModalAutenticationUpdateUser")
              }}>
                Atualizar
              </Button>
              {myUser?.authorizationLevel === 1&&!viewUser?.isActive&&
                <Button margin='10px' maxwidth="200px" type="button" color="blue" size="medium" onclick={()=>{
                  setIsOpenModal("ModalAutenticationActivateUser")
                  setId(viewUser?.id)
                }}>
                  Ativar
                </Button>
              }
              {viewUser?.isActive&&
                <Button margin='10px' maxwidth="200px" type="button" color="red" size="medium" onclick={()=>{
                  setIsOpenModal("ModalDeactivateUser")
                }}>
                  Desativar
                </Button>
              }
            </Footer>
          }
        />
      }
    </StyledUser>
  )
}

export default User

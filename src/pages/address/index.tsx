import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from '../../components/button'
import CardExtend from '../../components/cardExtend'
import Found from '../../components/found'
import { useAuth } from '../../context/auth.context'
import { useModal } from '../../context/modal.context'
import { useRequest } from '../../context/request.context'
import { IResponseListAllAddressRequest } from '../../services/api/address/interface.address'
import { IDataResponseConfirmCodeUserRequest } from '../../services/api/user/interface.user'
import Icons from '../../services/icons/icons'
import { ModeADM } from '../orders/style'
import { StyledAddress, Header, Footer } from './style'

const Address = () => {

  const { userId } = useParams()
  const navigate = useNavigate()

  const [ address, setAddress ] = useState<IResponseListAllAddressRequest>({} as IResponseListAllAddressRequest)
  const { listManyAddressRequest, updateMyAddressRequest } = useRequest()
  const { setIsOpenModal, setData, setId, isOpenModal, clearStates } = useModal()
  const { getUserStorgeOrRedirectAndRequired } = useAuth()
  const [ user, setUser ] = useState<IDataResponseConfirmCodeUserRequest>({} as IDataResponseConfirmCodeUserRequest)

  useEffect(()=>{
    (async()=>{
      try {
        const user =  await getUserStorgeOrRedirectAndRequired( { requerid:true } )
        setUser(user)
      } catch (error) {
        
      }
    })()

    return () => {
      clearStates()
    }
  },[])

  useEffect(()=>{
    (async()=>{
      try {
        const sucess = await listManyAddressRequest( userId ? { userId } : {})
        setAddress(sucess)
      } catch (error:any) {
        toast.error(error.message)
        navigate("/")
      }
    })()
  },[isOpenModal])

  const foundAddress = address?.address?.length === 0
  const hasAddress = address?.address?.length < 5 && address?.address?.length > 0

  return (
    <StyledAddress>
      <div className='order_header'>
        <h2 className='header_title'>
          <Icons.Address/>
          <ModeADM>

          ENDEREÇOS
          {userId&&<p>MODO ADMIN</p>}

        </ModeADM> 
        </h2>

        {hasAddress&&!userId&&
          <Button margin='0px' type="button" color="blue" size="small" onclick={()=>{
            setData(user)
            setIsOpenModal("ModalCreateAddress")
          }}>
            <Icons.Add size={25}/>
          </Button>
        }
      </div>

      {foundAddress&&
        <Found
          headerText="NENHUM ENDEREÇO CADASTRADO"
          bodyText="QUE TAL ADICIONAR AGLUM ENDEREÇO?"
          footerText="Endereços são necessarios para efetuar compras na plataforma!"
          modeADM={!!userId}
          onClick={()=>{ 
            setData(user)
            setIsOpenModal("ModalCreateAddress")
          }}
        />
      }

      <AnimatePresence>
        {
          address?.address?.map( address => {


            return (
              <CardExtend
                key={address.id}
                sessions={[
                  {
                    "Cep":address.cep,
                    "Rua":address?.street,
                    "Número":address?.number,
                    "Bairro":address?.neighborhood,
                    "Cidade":address?.city,
                    "Estado":address?.uf
                  },
                  {
                    "MESMA CIDADE":address.isSameTown ? "SIM" : "NÃO",
                    "PADRÃO":address.isDefault ? "SIM" : "NÃO",
                    ...user?.authorizationLevel === 1&&{"ENDEREÇO DA EMPRESA": address.isCompanyAddress ? "SIM" : "NÃO"}
                  }
                ]}
                header={
                  <Header>
                    <h3>
                      NOME
                    </h3>

                    <p>
                      {
                        address?.name
                      }
                    </p>
                  </Header>
                }
                footer={
                  <Footer>
                    {!userId&&
                      <>
                        {!address?.isDefault&&
                          <Button margin='30px 10px' type="button" color="gold" size="small" onclick={ async ()=>{
                            try {
                              await updateMyAddressRequest({ addressId:address.id, data:{ isDefault:true } })

                              const sucess = await listManyAddressRequest({})
                              setAddress(sucess)
                            } catch (error) {
                              
                            }
                          }}>
                            <Icons.Mark size={25}/>
                          </Button>
                        }
                        <Button margin='30px 10px' type="button" color="gold" size="small" onclick={()=>{
                          setData({user, address})
                          setId(address?.id)
                          setIsOpenModal("ModalUpdateAddress")
                        }}>
                          <Icons.Edit size={25}/>
                        </Button>
                        <Button margin='30px 10px' type="button" color="red" size="small" onclick={()=>{
                          setId(address?.id)
                          setIsOpenModal("ModalDeleteAddress")
                        }}>
                          <Icons.Trash size={25}/>
                        </Button>
                      </>
                    }
                  </Footer>
                }
              />
            ) 
          })
        }
      </AnimatePresence>
    </StyledAddress>
  )
}

export default Address

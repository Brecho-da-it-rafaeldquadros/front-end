import { useEffect, useState } from 'react'
import Button from '../../components/button'
import CardExtend from '../../components/cardExtend'
import { useAuth } from '../../context/auth.context'
import { useModal } from '../../context/modal.context'
import { useRequest } from '../../context/request.context'
import { IResponseListManyOrderRequest } from '../../services/api/order/interface.order'
import { IDataResponseConfirmCodeUserRequest } from '../../services/api/user/interface.user'
import Icons from '../../services/icons/icons'
import { Footer, Header, ModeADM, StyledOrders } from './style'
import Pagination from '@mui/material/Pagination';
import React from 'react'
import Found from '../../components/found'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const Orders = () => {

  const { userId } = useParams()

  const [ orders, setOrders ] = useState<IResponseListManyOrderRequest>({} as IResponseListManyOrderRequest) 
  const { listManyOrderRequest } = useRequest()
  const { setIsOpenModal, setData, setId, clearStates } = useModal()
  const { getUserStorgeOrRedirectAndRequired } = useAuth()

  const navigate = useNavigate()

  const [ page, setPage ] = useState<number>(1)

  const handleChange = async (event: React.ChangeEvent<unknown>, value: number) => {

    setPage(value)

    const sucess = await listManyOrderRequest(userId ? { page:`page=${value}`, userId } : { page:`page=${value}` } )

    setOrders(sucess)
  };

  const [ user, setUser ] = useState<IDataResponseConfirmCodeUserRequest>({} as IDataResponseConfirmCodeUserRequest)
  const isLevelOneUser = user?.authorizationLevel === 1

  useEffect(()=>{
    (async()=>{
      try {
        const myUser = await getUserStorgeOrRedirectAndRequired( { requerid:true } )

        setUser( myUser )
        
        const sucess = await listManyOrderRequest( userId ? { userId } : {})

        setOrders(sucess)
      } catch (error:any) {
        toast.error(error.message)
        navigate("/")
      }
    })()
  },[])

  useEffect(()=> ()=> { clearStates() },[])

  const isRequeridPagination = orders?.result?.length > 10
  const foundOrders = orders?.result?.length === 0

  return (
    <StyledOrders>
      <h2 className='order_title'>
        <Icons.Bag/>
        <ModeADM>

          { user.authorizationLevel === 1 && !userId ? "PEDIDOS DE TODOS OS USUARIO" : "PEDIDOS" }
          {userId&&<p>MODO ADMIN</p>}

        </ModeADM> 
      </h2>

      {isRequeridPagination&&
        <div className="order__pagination_block_first">
          <Pagination 
            page={page}
            defaultPage={1} 
            showFirstButton
            showLastButton
            count={orders?.amountPage} 
            variant="outlined" 
            shape="rounded" 
            onChange={handleChange}
          />
        </div>
      }

      {foundOrders&&
        <Found
          headerText="NENHUM PEDIDO ENCONTRADO"
          bodyText="QUE TAL DAR UMA OLHADA EM NOSSOS PRODUTOS?"
          footerText="Em nossos produtos poderá encontrar o pédido ídeal!"
          modeADM={!!userId}
          Icon={Icons.Arrow}
          onClick={()=>navigate("/")}
        />
      }

      {
        orders?.result?.map( order => {

          const isRequeridPaymentButton = !order?.paymentId && order.status !== "TEMPO ESGOTADO"
          const isTimeDefeated = order.status === "TEMPO ESGOTADO"

          return (
            <CardExtend
              key={order.id}
              sessions={[
                {
                  "status":order.status,
                  "método de pagamento":order.method,
                  "tipo de pagamento":order.methodType === null ? "AGUARDANDO PAGAMENTO" : order.methodType
                },
                {
                  "produtos":order.simpleProducts.join(" | ")
                },
                {
                  ...order.priceTransport !== 0&&{"endereço de entrega":order.address},
                  "ENDEREÇO DA BRECHO DA IT":order.companyAddress
                },
                {
                  "CÓDIGO METODO":order.deliveryMethodCode,
                  "ESTIMATIVA DE ENTREGA":order.deliveryStowageAt,
                  "CÓDIGO DE RASTREAMENTO":order.trackingCode,
                  "SITE PARA RASTREAR":order.companyTrackingAreaLink     
                },
                {...isLevelOneUser&&{
                  "id do pagamento":order.paymentId ? order.paymentId : "AGUARDANDO PAGAMENTO",
                  "id da preferencia":order.preferenceId,
                }},
                {
                  "criado":order.createdAt,
                  "atualizado":order.updatedAt,
                  "pode ser pago até":order.validAt,
                },
                {
                  "Preço total":`R$ ${order.priceAll.toFixed(2)}`,
                  "Preço dos produtos":`R$ ${order.priceProducts.toFixed(2)}`,
                  "Preço do transporte":`R$ ${order.priceTransport.toFixed(2)}`,
                },
              ]}
              header={
                <Header>
                  <h3>
                    PEDIDO
                  </h3>

                  <p>
                    {
                      order?.id
                    }
                  </p>
                </Header>
              }
              footer={
                <Footer>
                  {isRequeridPaymentButton&&
                    <Button maxwidth='200px' margin='30px 10px' type="button" color="blue" size="medium" onclick={()=>window.open(order.paymentURL)}>
                      Pagar
                    </Button>
                  }
                  {isLevelOneUser&&!isTimeDefeated&&
                    <Button margin='30px 10px' type="button" color="blue" size="small" onclick={()=>{
                      setData({ trackingCode:order.trackingCode, companyTrackingAreaLink:order.companyTrackingAreaLink })
                      setId(order.id)
                      setIsOpenModal("ModalAddTrackingOrder")
                    }}>
                      <Icons.Edit size={25}/>
                    </Button>
                  }
                </Footer>
              }
            />
          ) 
        })
      }
      
      {isRequeridPagination&&
        <div className="order__pagination_block_second">
          <Pagination 
            page={page}
            defaultPage={1} 
            showFirstButton
            showLastButton
            count={orders?.amountPage} 
            variant="outlined" 
            shape="rounded" 
            onChange={handleChange}
          />
        </div>
      }

    </StyledOrders>
  )
}

export default Orders

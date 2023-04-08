import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Button from '../../components/button'
import CardExtend from '../../components/cardExtend'
import CheckBox from '../../components/checkBox'
import { useBag } from '../../context/bag.context'
import { useModal } from '../../context/modal.context'
import { useRequest } from '../../context/request.context'
import { IDataResponseListDeliveryInAddressRequest, IResponseListAllAddressRequest, IResponseListDeliveryInAddressRequest } from '../../services/api/address/interface.address'
import Icons from '../../services/icons/icons'
import { generateDeliveryStowageAt } from '../../services/methods'
import { Footer } from '../address/style'
import { Header, StyledBagAddressAndDelivery } from './style'

const BagAddressAndDelivery = () => {

  const { listManyAddressRequest, listDeliveryInAddressRequest, updateMyAddressRequest } = useRequest()
  const { setDelivery } = useBag()
  const { setIsOpenModal, isOpenModal } = useModal()

  const [ addressMany, setAddress ] = useState<IResponseListAllAddressRequest>({} as IResponseListAllAddressRequest)
  const [ deliveryMany, setDeliveryMany ] = useState<IResponseListDeliveryInAddressRequest>({} as IResponseListDeliveryInAddressRequest)

  useEffect(()=>{
    (async()=>{
      try {
        const sucess = await listManyAddressRequest({})

        setAddress(sucess)
      } catch (error) {
        
      }
    })()
  },[isOpenModal])


  return (
    <StyledBagAddressAndDelivery
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{duration:0.2}}
      exit={{ opacity:0 }}
    >

      <Header>
        <h3>ENDEREÇO</h3>
        {addressMany?.address?.length < 5&&
          <Button
            type="submit" 
            color="blue" 
            size="small"
            margin='0px'
            onclick={()=>{
              setIsOpenModal("ModalCreateAddress")
            }}
          >
            <Icons.Add size={25}/>
          </Button>
        }
      </Header>

      {
        addressMany?.address?.map( (address, i) => {
          
          const serializerAddress = `Rua ${address.street}, ${address.number}, ${address.neighborhood}, ${address.city}/${address.uf} - ${address.cep}`

          return (
            <CardExtend
            key={address.id}
              sessions={[
                { endereço:serializerAddress, padrão:address?.isDefault ? "SIM" : "NÃO" }
              ]}
              header={
                <h3>{ address.name.toUpperCase() }</h3>
              }
              footer={
                <Footer>
                  {!address?.isDefault&&
                    <Button margin='30px 10px' type="button" color="gold" size="small" onclick={ async ()=>{
                      try {
                        await updateMyAddressRequest({ addressId:address.id, data:{ isDefault:true } })

                        setDeliveryMany({} as IResponseListDeliveryInAddressRequest)
                        setDelivery({} as IDataResponseListDeliveryInAddressRequest)

                        const sucess = await listManyAddressRequest({})
                        setAddress(sucess)
                      } catch (error) {
                              
                      }
                    }}>
                      <Icons.Mark size={25}/>
                    </Button>
                  }
                </Footer>
              }
            />
          )
        })
      }

      <Header>
        <h3>FRETE E PRAZO</h3>
        <Button
          type="submit" 
          color="gold" 
          size="small"
          margin='0px'
          onclick={async ()=>{
            try {
              const sucess = await listDeliveryInAddressRequest()

              setDeliveryMany( () => sucess )
            } catch (error:any) {
              toast.error( error.message )
            }
          }}
        >
          <Icons.Search size={25}/>
        </Button>
      </Header>

      <AnimatePresence>

        {
          deliveryMany?.delivery?.map( (delivery, i) => {
          
            return (
              <CardExtend
              key={delivery.Codigo}
                sessions={[
                  {
                    "entrega":delivery.type,
                    "descrição":delivery.description ? delivery.description : "Nenhuma"
                  },
                  { 
                    "código":delivery.Codigo,
                    "preço":delivery.Valor,
                    "estimativa de entrega":delivery.PrazoEntrega ? generateDeliveryStowageAt(Number( delivery.PrazoEntrega )) : "Pegar na loja de segunda a sexta"
                  }
                ]}
                header={
                <>
                  <CheckBox
                    key={ delivery.Codigo }
                    idkey={ String( delivery.Codigo  )}
                    text={ delivery.Valor }
                    onChange={( check )=>{

                      if( check ){
                        setDelivery(delivery)
                      }
                      
                    }}
                  />
                </>
                }
              />
            )
          })
        }
      </AnimatePresence>

    </StyledBagAddressAndDelivery>
  )
}

export default BagAddressAndDelivery

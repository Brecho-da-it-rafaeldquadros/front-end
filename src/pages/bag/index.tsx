import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Button from '../../components/button'
import { IResponseListMyBagRequest } from '../../services/api/bag/interface.bag'
import Icons from '../../services/icons/icons'
import { Centralize, Checkout, FoundBag, Organization, Resume, StyledBag, Time } from './style'
import Stage from './stage'
import { useRequest } from '../../context/request.context'
import { toast } from 'react-toastify'
import { useBag } from '../../context/bag.context'
import BasePage from '../../components/basePage'
import Benefits from '../../components/benefits'
import { useEffect, useState } from 'react'
import { transformDateInMileseconds } from '../../services/methods'
import { ListProductsRequest } from '../../services/api/products/request.products'
import Carousel from '../../components/carousel'
import Product from '../../components/product'
import { IProduct } from '../../services/api/products/interface.products'
import { motion } from 'framer-motion'

const Bag = () => {

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const isIndex = pathname === "/carrinho"

  const { myBag, setMyBag, timeCler, delivery, setValidAt, timeoutId, setTimerCler } = useBag()

  const hasbag = myBag?.bag?.products?.length > 0

  const { removeAllProductInBagRequest, createOrderRequest, listMyBagRequest } = useRequest()

  const [ products, setProducts ] = useState<any>({} as any)

  useEffect(()=>{
    (async()=>{
      const products = await ListProductsRequest(1)
      setProducts(products)

      const sucess = await listMyBagRequest()
      setMyBag( sucess )
      
      setValidAt(transformDateInMileseconds(sucess?.bag?.validAt))
    })()
  },[])

  const removeAllProductsInCart = async () => {
    try {
      const sucess = await removeAllProductInBagRequest()

      toast.success(sucess.message)

      clearTimeout(timeoutId)
      setValidAt(0)
      setTimerCler("00:00")
      setMyBag({} as IResponseListMyBagRequest)
    } catch (error:any) {
      toast.error(error.message)
    }
  }
  let buttonNameSend = ""

  switch(pathname){
    case "/carrinho":
      buttonNameSend = "IR PARA ENTREGA"
      break
    case "/carrinho/endereco-frete":
      buttonNameSend = "IR PARA PAGAMENTO"
      break
  }

  async function sendPayment(){

    if( Object.entries( delivery ).length === 0 ){
        toast.error("Deve selecionar um meio de pagamento")
        return
    }

    try {
      const data = {
        code:String( delivery.Codigo ),
        price:Number( delivery.Valor.replaceAll(",", "") ),
        delivery_time:Number( delivery.PrazoEntrega )
      }
      
      console.log( data )

      const sucess = await createOrderRequest({ data })

      toast.success(sucess.message)

      window.open(sucess.order.paymentURL)

      setMyBag({} as IResponseListMyBagRequest)

      setTimeout(()=>{
        navigate("/perfil")
      },1000)
    } catch (error:any) {
      toast.error(error.message)
    }
  }

  const deliveryValue = delivery?.Valor?.length > 0 && Number( delivery?.Valor?.replaceAll(",", ".") ) 
  let priceAll = Number(  myBag?.resume?.price?.valueFomart?.replaceAll(".", "")?.replaceAll(",", ".")  )

  if( deliveryValue ){
    priceAll += deliveryValue
  }

  return (
    <BasePage>
      <Centralize>
        <StyledBag>
          <div className='block__header'>
            <h2>
              <Icons.Bag/>
              MEU CARRINHO
            </h2>
              
            {hasbag&&isIndex&&
              <Button 
                type="submit" 
                color="red" 
                size="small"
                margin='0px'
                onclick={()=>{
                  clearTimeout(timeoutId)
                  removeAllProductsInCart()
                }}
              >
                <Icons.Trash/>
              </Button>
            }
          </div>

          {hasbag ?
            <motion.div className='block__hasBag'
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{duration:0.4}}
              exit={{ opacity:0 }}
            > 
              <Time>
                <p>TEMPO PARA LIMPAR</p>
                <p>{timeCler}</p>
              </Time>

              <Organization>
              
              <div className='transition_mobile'>
                <Checkout>
                  <Stage
                    name="SACOLA"
                    SVG={Icons.Bag}
                    colorIncludesName="carrinho"
                  />
                  <Stage
                    name="ENTREGA"
                    SVG={Icons.Delivery}
                    colorIncludesName="endereco"
                  />
                  <Stage
                    name="PAGAMENTO"
                    SVG={Icons.Payment}
                    colorIncludesName="nenhum"
                  />
                </Checkout>

                  <div className='organization__v2'>
                  <Resume>

                    <h4>RESUMO</h4>
                    <div className='resume__line'/>

                    <div className='resume__information'>
                      <p>QUANTIDADE</p>
                      <p>{ myBag?.resume?.amount }</p>
                    </div>

                    <div className='resume__price'>
                      <p className='price__name'>TOTAL</p>
                      <p className='price__value'>R$ { priceAll.toFixed(2) }</p>
                    </div>

                  </Resume>
                  <Button 
                    type="submit" 
                    color="gold" 
                    size="large"
                    margin='0px 0px 20px 0px'
                    onclick={()=>{ 

                      switch(pathname){
                        case "/carrinho":
                          navigate("/carrinho/endereco-frete")
                          break
                        case "/carrinho/endereco-frete":
                          sendPayment()
                          break
                      }
                    }}
                  >
                    {
                      buttonNameSend
                    }
                  </Button>
                </div>
              </div>
                  
              <Outlet/>
                  
            </Organization>

            </motion.div>
          : 
            <FoundBag
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{duration:0.2}}
              exit={{ opacity:0 }}
            >

              <p>
                SUA SACOLA ESTÁ VAZIA
              </p>

              <figure>
                <Icons.Bag/>
              </figure>

            </FoundBag>
          }
    
          <Carousel
            products={products?.result?.map( (product:IProduct) => 
              <Product
                key={product.id}
                content={product}
              />  
            )}
            title="PRODUTOS"
            onSearchAll={ async () => {}}
          />

          <Benefits/>

        </StyledBag>
      </Centralize>
    </BasePage>
  )
}

export default Bag

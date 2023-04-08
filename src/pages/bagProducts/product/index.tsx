import { IDataProductResponseResponseListMyBagRequest, IResponseListMyBagRequest } from '../../../services/api/bag/interface.bag'
import Icons from '../../../services/icons/icons'
import { CardImage, CardInformations, StyledProduct } from './style'
import Button from '../../../components/button'
import { useRequest } from '../../../context/request.context'
import { toast } from 'react-toastify'
import { getCurrentDateMileseconds, tranformPennyInPriceFloat, transformDateInMileseconds } from '../../../services/methods'
import { useBag } from '../../../context/bag.context'
import { useNavigate } from 'react-router-dom'

interface IPropsProduct {
  product:IDataProductResponseResponseListMyBagRequest
}

const Product = ( { product }:IPropsProduct ) => {

  const { setMyBag, setValidAt, timeoutId, returnMessage, myBag, setTimerCler } = useBag()
  const navigate = useNavigate()

  const hasImage = product?.image_1

  const currentPrice = product?.priceAll ? tranformPennyInPriceFloat(Number(product.priceAll.toFixed(2).replace(".", ""))) : undefined
  const salePrice = product?.salePrice ? tranformPennyInPriceFloat(Number( Number(product.salePrice)?.toFixed(2)?.replace(".", "") )) : undefined

  const isSale = product?.isSale
  
  const { removeOneProductInBagRequest, listMyBagRequest, removeAllProductInBagRequest } = useRequest()

  const removeOneProduct = async ( productId:string ) => {

    try {
      clearTimeout(timeoutId)

      const sucess = await removeOneProductInBagRequest({ productId })
      toast.success(sucess.message)

      const sucessList = await listMyBagRequest()

      if( !sucessList?.bag ){
        clearTimeout(timeoutId)
        setValidAt(0)
        setTimerCler("00:00")
        setMyBag({} as IResponseListMyBagRequest)
      }else{

        setValidAt(transformDateInMileseconds(sucessList?.bag?.validAt))
        setMyBag(sucessList)
  
        const currentAt = getCurrentDateMileseconds() 
  
        returnMessage(transformDateInMileseconds(sucessList?.bag?.validAt) - currentAt)
      }
    } catch (error:any) {
      toast.error(error.message)
    }
  }

  return (
    <StyledProduct
      layout
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{ duration:0.3 }}
      exit={{ scale: 0.9, opacity:0 }}
    >

      <CardImage onClick={()=>navigate(`/produtos/${product?.id}`)}>
        <p>
          { product?.brand?.name }
        </p>

        <figure>
         {hasImage ?
         <img src={ product?.image_1 } alt={ product?.name } />
         :
         <Icons.FoundImage/>
        }
        </figure>
      </CardImage>

      <CardInformations>
        <div className='card__block'>
          <p className='block__category'>
            { product?.category?.name }
          </p>

          <Button 
            type="button" 
            color="red" 
            size="small"
            margin='0px'
            onclick={()=>{
              clearTimeout(timeoutId!)
              removeOneProduct(product.id)
            }}
          >
            <Icons.Trash/>
          </Button>
        </div>

        <p className='card__title'>
          { product?.name }
        </p>
   
        <div className='card__price'>
          <span className='price__symbol'>
            R$
          </span>
          <p className='price__value'>
            { isSale ? 
                salePrice?.value
              :
                currentPrice?.value
            }
          </p>
          <p className='price_penny'>
            ,{ isSale ? 
                salePrice?.penny
              :
                currentPrice?.penny
            }
          </p>
        </div>

      </CardInformations>

    </StyledProduct>
  )
}

export default Product

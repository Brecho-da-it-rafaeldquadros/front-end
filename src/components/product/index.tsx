import { useNavigate } from 'react-router-dom'
import { useBag } from '../../context/bag.context'
import { Promotion } from '../../pages/uniqueProduct/style'
import { IProduct } from '../../services/api/products/interface.products'
import Icons from '../../services/icons/icons'
import { tranformPennyInPriceFloat } from '../../services/methods'
import Button from '../button'
import { Figure, StyledProduct, Brand, Header, Description, Price } from './style'

interface IPropsProduct {
  content:IProduct
}

const Product = ( props:IPropsProduct ) => {

  const currentPrice = props?.content?.priceAll ? tranformPennyInPriceFloat(Number(props?.content?.priceAll?.toFixed(2)?.replace(".", ""))) : undefined
  const salePrice = props?.content?.salePrice ? tranformPennyInPriceFloat(Number( Number(props?.content?.salePrice)?.toFixed(2)?.replace(".", "") )) : undefined

  const navigate = useNavigate()

  const isPromotion = !!props?.content?.isSale

  const { addProductIdInBag } = useBag()

  return (
    <StyledProduct>
      
      <Figure onClick={()=>navigate(`/produtos/${props?.content?.id}`)}>
        <img src={ props.content?.image_1! } alt="" />
      </Figure>

      <Brand>
        { props?.content?.brand?.name }
      </Brand>

      <Header>
        <h4>{ props?.content?.name }</h4>
        <Button
          margin='0px'
          type="button"
          color="gold"
          size="small"
          onclick={()=>addProductIdInBag(props?.content?.id)}
        >
          <Icons.AddOnCart size={30} color="#F5F5F5" />
        </Button>
      </Header>

      <Description>
        { props?.content?.description }
      </Description>

      {isPromotion&&<Promotion>{ currentPrice?.valueFomart }</Promotion>}

      <Price>
        <p className='price__real'>R$</p>
        <p className='price__value'>{ isPromotion ? salePrice?.value : currentPrice?.value }</p>
        <p className='price__penny'>,{ isPromotion ? salePrice?.penny : currentPrice?.penny }</p>
      </Price>

    </StyledProduct>
  )
}

export default Product

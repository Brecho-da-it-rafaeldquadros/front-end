import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import BasePage from '../../components/basePage'
import { Carousel, StyledUniqueProduct, IMG, Slide, Header, Padding, ProductInformations, Category, Promotion, Price, CardFooter, CardHeader, Figure } from './style'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Button from '../../components/button';
import Icons from '../../services/icons/icons';
import CardExtend from '../../components/cardExtend';
import Benefits from '../../components/benefits';
import { useEffect, useState } from 'react';
import { useRequest } from '../../context/request.context';
import { IProduct, ResponseListOneProductRequest } from '../../services/api/products/interface.products';
import { useAuth } from '../../context/auth.context';
import { useBag } from '../../context/bag.context';
import { tranformPennyInPriceFloat } from '../../services/methods';
import { useModal } from '../../context/modal.context';
import ProductCarousel from "../../components/carousel"
import Product from '../../components/product';
import { ListProductsRequest } from '../../services/api/products/request.products';

const UniqueProduct = () => {

  const { productId } = useParams()
  const navigate = useNavigate()
  const { listOneProductRequest } = useRequest()
  const { getUserStorgeOrRedirectAndRequired } = useAuth()
  const { addProductIdInBag } = useBag()
  const { setIsOpenModal, setData } = useModal()

  if( !productId ){
    toast.warning("Produto não encontrado")
    navigate("/produtos")
  }

  const [ product, setProduct ] = useState<ResponseListOneProductRequest>({} as ResponseListOneProductRequest)
  const [ cardExtendInformation, setCardExtendInformation ] = useState<object[]>([])
  const [ products, setProducts ] = useState<any>({} as any)

  const [ position, setPosition ] = useState(0)

  useEffect(()=>{
    (async()=>{
      try {
        const sucess = await listOneProductRequest({ productId:productId! })
        setProduct( sucess )

        const products = await ListProductsRequest(1)
        setProducts(products)


        const user = await getUserStorgeOrRedirectAndRequired( {} )

        let list:object[] = [
          {
            "nome":sucess?.product?.name,
          },
          {
            "descrição":sucess?.product?.description,
          },
          {
            "cor":sucess?.product?.color,
            "tamanho":sucess?.product?.size,
            "marca":sucess?.product?.brand?.name,
            "categoria":sucess?.product?.category?.name,
            "criado":sucess?.product?.createdAt,
          }
        ]

        if( user?.authorizationLevel === 1 ){
          list.unshift(
            {
              id:sucess?.product?.id,
            }
          )
        }

        setCardExtendInformation(list)

      } catch (error:any) {
        toast.error(error.message)
        navigate("/produtos")
      }
    })()
  },[productId])

  const images = [product?.product?.image_1, product?.product?.image_2, product?.product?.image_3].filter( image => image )

  const currentPrice = product?.product?.priceAll ? tranformPennyInPriceFloat(Number(product.product.priceAll.toFixed(2).replace(".", ""))) : undefined
  const salePrice = product?.product?.salePrice ? tranformPennyInPriceFloat(Number( Number(product.product.salePrice)?.toFixed(2)?.replace(".", "") )) : undefined

  return (
    <BasePage>
      <Padding>

        <StyledUniqueProduct>

          <h3 className="product__title">
            { product?.product?.name }
          </h3>

          <Header>
            <Carousel
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{duration:0.3}}
              exit={{ opacity:0 }}
            >
              <AliceCarousel 
                activeIndex={position}
                animationType="slide"
                items={ images.map( imageURL => 
                  <Figure>
                    <IMG 
                      src={imageURL!}
                      alt="Imagem do produto" 
                    />  
                  </Figure>
                )                
                }
                disableButtonsControls
                autoHeight
                renderDotsItem={( e )=>{

                  e?.isActive&&setPosition( e?.activeIndex )

                  const i = e.activeIndex 
                  return (
                    <Slide>
                      <img src={images[i]!} alt="" />
                    </Slide>
                  )
                }}
              />
            </Carousel>

            <ProductInformations>

                <div className='product__categories'>
                  <Category>
                    { product?.product?.size?.toUpperCase() }
                  </Category>
                  <Category>
                    { product?.product?.color?.toUpperCase() }
                  </Category>
                  <Category>
                    { product?.product?.category?.name?.toUpperCase() }
                  </Category>
                  <Category>
                    { product?.product?.brand?.name?.toUpperCase() }  
                  </Category>
                </div>

                {product?.product?.brand?.sizeTable&&
                  <Button
                    type="button"
                    color="blue"
                    size="small"
                    margin="0px 0px 0px 5px"
                    onclick={()=>{
                      setIsOpenModal("ModalViewImage")
                      setData({
                        imageURL:product?.product?.brand?.sizeTable
                      })
                    }}
                  >
                    <Icons.Information size={30}/>
                  </Button>
                }
                {product?.product?.isSale&&
                  <Promotion>
                    {currentPrice?.valueFomart ? currentPrice?.valueFomart : "Não encontrado"}
                  </Promotion>
                }
                
                <Price>
                  <p className='price__real'>R$</p>
                  <p className='price__value'>{ product?.product?.isSale ? salePrice?.value : currentPrice?.value }</p>
                  ,
                  <p className='price__penny'>{ product?.product?.isSale ? salePrice?.penny : currentPrice?.penny }</p>

                </Price>

                <Button
                  type="button"
                  color="gold"
                  size="large"
                  margin="10px 0px 0px 5px"
                  maxwidth='300px'
                  onclick={ async ()=> await addProductIdInBag(productId!)}
                >
                  ADICIONAR A SACOLA
                </Button>

            </ProductInformations>
          </Header>

          <CardExtend
            sessions={cardExtendInformation}
            header={
              <CardHeader>
                  <h3 className='header__title'>
                    DETALHES
                  </h3>
              </CardHeader>
            }
          />
            
          <ProductCarousel
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

        </StyledUniqueProduct>
      </Padding>
    </BasePage>
  )
}

export default UniqueProduct

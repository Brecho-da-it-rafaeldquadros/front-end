import { AnimatePresence } from 'framer-motion'
import { useBag } from '../../context/bag.context'
import Product from './product'
import { StyledBagProducts } from './style'

const BagProducts = () => {

  const { myBag } = useBag()

  const hasProducts = myBag?.bag?.products

  return (
    <AnimatePresence>
      <StyledBagProducts
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{duration:0.2}}
        exit={{ opacity:0 }}
      >
        <h3>PRODUTOS</h3>
        <AnimatePresence>
        {hasProducts&&
          hasProducts?.map( product => 
            <Product
              key={product.id}
              product={product}
            /> 
          )
        }
        </AnimatePresence> 
      </StyledBagProducts>
    </AnimatePresence>
  )
}

export default BagProducts

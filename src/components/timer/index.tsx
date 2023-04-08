import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router'
import { useBag } from '../../context/bag.context'
import { StyledTimer } from './style'

const Timer = () => {
  const { timeCler, myBag } = useBag()
  const { pathname } = useLocation()

  const isBag = pathname.includes("carrinho")
  const hasBag = myBag?.bag?.id

  const hasOneMinute = Number( timeCler.slice(0,2) ) === 0
  const hasFiveMinute = Number( timeCler.slice(0,2) ) <= 5

  return (
    <AnimatePresence>
      {hasBag&&!isBag&&
        <StyledTimer
          layout
          initial={{ opacity:0, scale:0.3 }}
          animate={{ opacity:1, scale:1 }}
          exit={{ opacity:0, scale:0.3 }}
          hasOneMinute={hasOneMinute}
          hasFiveMinute={hasFiveMinute}
        >         
          <p className='remove_mobile'>
            LIMPAR SACOLA
          </p>

          <p>
            { timeCler }
          </p>
        </StyledTimer>
      }
    </AnimatePresence>
  )
}

export default Timer

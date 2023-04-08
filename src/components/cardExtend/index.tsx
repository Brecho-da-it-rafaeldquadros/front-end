import { AnimatePresence } from 'framer-motion'
import { ReactNode, useState } from 'react'
import Icons from '../../services/icons/icons'
import Button from '../button'
import Session from './session'
import { StyledCardExtend, Header, Body } from './style'
import { motion } from 'framer-motion'

interface IPropsCardExtend {
  header:ReactNode
  sessions:object[]
  footer?:ReactNode
  disableExtend?:boolean
}

const CardExtend = ( props:IPropsCardExtend ) => {

  const [ isOpen, setIsOpen ] = useState( props?.disableExtend ? true : false)

  return (
    <StyledCardExtend
      initial={{ opacity:0, x:100 }}
      animate={{ opacity:1, x:0 }}
      exit={{ opacity:0, scale:0.9 }}
    >  
     
      <Header
        isOpen={isOpen}
      >
        <div className='header__content'>
          { props.header }

          {!props?.disableExtend&&
            <Button 
              type="button" 
              color="gold" 
              size="small"
              margin='0px'
              onclick={()=>setIsOpen(!isOpen)}
            >
              <motion.div
                style={{ display:"flex", justifyContent:"center", alignItems:"center" }}
                initial={isOpen ? { rotate:180 } : { rotate:0 } }
                animate={isOpen ? { rotate:0 } : { rotate:180 } }
              >
                <Icons.ArrowTop size={35}/>
              </motion.div>
            </Button>
          }
        </div>
      </Header>
      
      <AnimatePresence>
        {isOpen&&
          <Body
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration:0.2 }}
            exit={{ opacity:0 }}
          >
            {
              props?.sessions?.map( (session, i) => 
                <Session
                  key={i}
                  session={session}
                />
              )
            }

            {   props?.footer }
          </Body>
        }
      </AnimatePresence>

    </StyledCardExtend>
  )
}

export default CardExtend

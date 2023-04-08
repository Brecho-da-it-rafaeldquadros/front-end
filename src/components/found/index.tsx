import { AnimatePresence } from 'framer-motion'
import { IconType } from 'react-icons'
import Icons from '../../services/icons/icons'
import Button from '../button'
import { StyledFound, Card } from './style'

interface IPropsFound {
  onClick:Function
  headerText:string
  bodyText:string
  footerText:string
  Icon?:IconType
  modeADM?:boolean
}

const Found = ( props:IPropsFound ) => {
  return (
    <AnimatePresence>
      
      <StyledFound
        initial={{ scale:0.9, opacity:0 }}
        animate={{ scale:1, opacity:1 }}
        transition={{ duration:0.3 }}
        exit={{ x:-100, opacity:0 }}
      >

          <Card
            modeADM={!!props?.modeADM}
          >

            <div className='card__header'>
              <p>
                { props?.headerText }
              </p>

              <Icons.sadFace size={36}/>
            </div>

            {!props?.modeADM&&
              <>
                <div className='card__body'>
                  <div className='body__text'>
                    <Icons.happyFace size={36}/>

                    <p>
                      { props?.bodyText }
                    </p>
                  </div>

                  <Button margin='0px' type="submit" color="blue" size="small" onclick={props.onClick}>
                    { props?.Icon ? <props.Icon/> : <Icons.Add size={25}/>}
                  </Button>

                </div>

                <p className='card__footer'>
                  { props?.footerText }
                </p>
              </>
            }


          </Card>
        
      </StyledFound>
    </AnimatePresence>
  )
}

export default Found
